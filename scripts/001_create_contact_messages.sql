-- Create contact_messages table for storing form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can insert contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated users (admins) can read messages
CREATE POLICY "Authenticated users can read contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
