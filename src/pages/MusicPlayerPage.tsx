import { MusicPlayer } from '@/components/MusicPlayer';

export default function MusicPlayerPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Music Player</h1>
          <p className="text-muted-foreground">Enjoy your favorite tunes</p>
        </div>
        
        <div className="flex justify-center">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}