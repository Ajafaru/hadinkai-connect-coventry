import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  LogOut, Upload, Image, Video, Trash2, Eye, EyeOff, Plus, LayoutDashboard
} from "lucide-react";
import logo from "@/assets/logo.png";

interface MediaPost {
  id: string;
  title: string;
  description: string | null;
  media_url: string;
  media_type: string;
  published: boolean;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<MediaPost[]>([]);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchPosts();
    }
  }, [user, isAdmin]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("media_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) return;
    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const mediaType = file.type.startsWith("video/") ? "video" : "image";

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("media").getPublicUrl(filePath);

    const { error: insertError } = await supabase.from("media_posts").insert({
      title,
      description: description || null,
      media_url: urlData.publicUrl,
      media_type: mediaType,
      published: false,
      created_by: user.id,
    });

    if (insertError) {
      toast({ title: "Save failed", description: insertError.message, variant: "destructive" });
    } else {
      toast({ title: "Media uploaded!", description: "You can now publish it." });
      setTitle("");
      setDescription("");
      setFile(null);
      setShowForm(false);
      fetchPosts();
    }
    setUploading(false);
  };

  const togglePublish = async (post: MediaPost) => {
    const { error } = await supabase
      .from("media_posts")
      .update({ published: !post.published })
      .eq("id", post.id);

    if (!error) {
      toast({ title: post.published ? "Unpublished" : "Published!" });
      fetchPosts();
    }
  };

  const deletePost = async (post: MediaPost) => {
    const { error } = await supabase.from("media_posts").delete().eq("id", post.id);
    if (!error) {
      toast({ title: "Deleted" });
      fetchPosts();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-foreground">Access Denied</CardTitle>
            <CardDescription>You need admin privileges to access this dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 justify-center">
            <Button variant="outline" onClick={() => navigate("/")}>Go Home</Button>
            <Button variant="destructive" onClick={signOut}>Sign Out</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hadin Kai" className="w-10 h-10 object-contain" />
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-primary" />
              <h1 className="font-heading font-semibold text-lg text-foreground">Admin Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>Site</Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.filter(p => p.media_type === 'image').length}</p>
                <p className="text-sm text-muted-foreground">Images</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Video className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.filter(p => p.media_type === 'video').length}</p>
                <p className="text-sm text-muted-foreground">Videos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.filter(p => p.published).length}</p>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upload Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-semibold text-foreground">Media Library</h2>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4 mr-1" />
            Upload Media
          </Button>
        </div>

        {showForm && (
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Upload New Media</CardTitle>
              <CardDescription>Add images or videos to the media library</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="E.g. Ghana Independence Celebration"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief description..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={uploading}>
                    <Upload className="w-4 h-4 mr-1" />
                    {uploading ? "Uploading..." : "Upload"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
              <div className="aspect-video bg-muted relative">
                {post.media_type === "video" ? (
                  <video src={post.media_url} className="w-full h-full object-cover" muted />
                ) : (
                  <img src={post.media_url} alt={post.title} className="w-full h-full object-cover" />
                )}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.published 
                      ? "bg-primary/90 text-primary-foreground" 
                      : "bg-muted-foreground/80 text-background"
                  }`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                  {post.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={post.published ? "outline" : "default"}
                    onClick={() => togglePublish(post)}
                    className="flex-1"
                  >
                    {post.published ? <EyeOff className="w-3 h-3 mr-1" /> : <Eye className="w-3 h-3 mr-1" />}
                    {post.published ? "Unpublish" : "Publish"}
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deletePost(post)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No media uploaded yet</p>
            <p className="text-sm">Click "Upload Media" to get started</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
