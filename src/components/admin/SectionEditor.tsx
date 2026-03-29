import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Plus } from "lucide-react";

interface SectionEditorProps {
  section?: ContentSection | null;
  userId: string;
  onSaved: () => void;
  onCancel: () => void;
}

export interface ContentSection {
  id: string;
  section_type: string;
  title: string;
  subtitle: string | null;
  body: string | null;
  content: Record<string, unknown>;
  media_urls: string[];
  display_order: number;
  published: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

const SECTION_TYPES = [
  { value: "blog_post", label: "Blog Post / Article" },
  { value: "event", label: "Event Announcement" },
  { value: "gallery", label: "Photo / Video Gallery" },
  { value: "banner", label: "Banner / Highlight" },
  { value: "announcement", label: "Quick Announcement" },
];

const SectionEditor = ({ section, userId, onSaved, onCancel }: SectionEditorProps) => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [sectionType, setSectionType] = useState(section?.section_type || "blog_post");
  const [title, setTitle] = useState(section?.title || "");
  const [subtitle, setSubtitle] = useState(section?.subtitle || "");
  const [body, setBody] = useState(section?.body || "");
  const [mediaUrls, setMediaUrls] = useState<string[]>(section?.media_urls || []);
  const [content, setContent] = useState<Record<string, string>>({
    date: (section?.content as Record<string, string>)?.date || "",
    location: (section?.content as Record<string, string>)?.location || "",
    time: (section?.content as Record<string, string>)?.time || "",
    link_url: (section?.content as Record<string, string>)?.link_url || "",
    link_text: (section?.content as Record<string, string>)?.link_text || "",
  });

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    const newUrls: string[] = [];
    for (const file of Array.from(files)) {
      const fileExt = file.name.split(".").pop();
      const filePath = `sections/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error } = await supabase.storage.from("media").upload(filePath, file);
      if (error) {
        toast({ title: "Upload failed", description: error.message, variant: "destructive" });
        continue;
      }
      const { data: urlData } = supabase.storage.from("media").getPublicUrl(filePath);
      newUrls.push(urlData.publicUrl);
    }

    setMediaUrls((prev) => [...prev, ...newUrls]);
    setUploading(false);
    if (newUrls.length > 0) {
      toast({ title: `${newUrls.length} file(s) uploaded` });
    }
  };

  const removeMedia = (index: number) => {
    setMediaUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!title.trim()) {
      toast({ title: "Title is required", variant: "destructive" });
      return;
    }
    setSaving(true);

    const payload = {
      section_type: sectionType,
      title: title.trim(),
      subtitle: subtitle.trim() || null,
      body: body.trim() || null,
      content: content as unknown as Record<string, unknown>,
      media_urls: mediaUrls,
      created_by: userId,
    };

    let error;
    if (section) {
      const { error: e } = await supabase
        .from("content_sections")
        .update(payload)
        .eq("id", section.id);
      error = e;
    } else {
      // Get max display_order
      const { data: maxData } = await supabase
        .from("content_sections")
        .select("display_order")
        .order("display_order", { ascending: false })
        .limit(1);
      const nextOrder = maxData && maxData.length > 0 ? (maxData[0] as { display_order: number }).display_order + 1 : 0;

      const { error: e } = await supabase
        .from("content_sections")
        .insert({ ...payload, display_order: nextOrder });
      error = e;
    }

    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: section ? "Section updated!" : "Section created!" });
      onSaved();
    }
    setSaving(false);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg">{section ? "Edit Section" : "Create New Section"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Section Type */}
        <div className="space-y-2">
          <Label>Section Type</Label>
          <Select value={sectionType} onValueChange={setSectionType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SECTION_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Section title" required />
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <Label>Subtitle (optional)</Label>
          <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Short tagline or subtitle" />
        </div>

        {/* Body / Content */}
        <div className="space-y-2">
          <Label>Body Content</Label>
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your content here... Use paragraphs to separate sections."
            rows={8}
          />
        </div>

        {/* Event-specific fields */}
        {(sectionType === "event" || sectionType === "announcement") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input type="date" value={content.date} onChange={(e) => setContent({ ...content, date: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Time</Label>
              <Input value={content.time} onChange={(e) => setContent({ ...content, time: e.target.value })} placeholder="e.g. 6:00 PM" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>Location</Label>
              <Input value={content.location} onChange={(e) => setContent({ ...content, location: e.target.value })} placeholder="Event venue" />
            </div>
          </div>
        )}

        {/* Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Link URL (optional)</Label>
            <Input value={content.link_url} onChange={(e) => setContent({ ...content, link_url: e.target.value })} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label>Link Text</Label>
            <Input value={content.link_text} onChange={(e) => setContent({ ...content, link_text: e.target.value })} placeholder="Learn More" />
          </div>
        </div>

        {/* Media Upload */}
        <div className="space-y-3">
          <Label>Media (Images & Videos)</Label>
          <div className="flex flex-wrap gap-3">
            {mediaUrls.map((url, i) => (
              <div key={i} className="relative w-24 h-24 rounded-lg overflow-hidden group border border-border">
                {url.match(/\.(mp4|webm|mov)/) ? (
                  <video src={url} className="w-full h-full object-cover" muted />
                ) : (
                  <img src={url} alt="" className="w-full h-full object-cover" />
                )}
                <button
                  onClick={() => removeMedia(i)}
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <label className="w-24 h-24 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <Plus className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground mt-1">Add</span>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </label>
          </div>
          {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button onClick={handleSave} disabled={saving}>
            <Upload className="w-4 h-4 mr-1" />
            {saving ? "Saving..." : section ? "Update Section" : "Create Section"}
          </Button>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionEditor;
