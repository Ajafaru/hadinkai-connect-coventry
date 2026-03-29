
-- Content sections table for CMS
CREATE TABLE public.content_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_type text NOT NULL DEFAULT 'blog_post',
  title text NOT NULL,
  subtitle text,
  body text,
  content jsonb DEFAULT '{}'::jsonb,
  media_urls text[] DEFAULT '{}',
  display_order integer NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT false,
  created_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.content_sections ENABLE ROW LEVEL SECURITY;

-- Admins can do everything
CREATE POLICY "Admins can manage sections" ON public.content_sections
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Published sections viewable by everyone
CREATE POLICY "Published sections viewable by everyone" ON public.content_sections
  FOR SELECT TO public
  USING (published = true);

-- Update trigger
CREATE TRIGGER update_content_sections_updated_at
  BEFORE UPDATE ON public.content_sections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.content_sections;
