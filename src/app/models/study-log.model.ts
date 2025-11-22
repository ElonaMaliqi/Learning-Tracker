export interface StudyLog {
  id: number;            // unique identifier for each log
  topic: string;          // subject or topic studied
  date: string;           // ISO date string
  duration: number;       // in hours
  notes?: string;         // optional notes
  tags?: string[];        // optional tags
}