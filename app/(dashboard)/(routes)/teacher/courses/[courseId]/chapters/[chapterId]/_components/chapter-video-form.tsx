"use client";

import * as z from "zod";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { Pencil, PlusCircle, Video, Trash } from "lucide-react"; // <--- Added Trash
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Chapter, MuxData } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
};

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // <--- New Loading State

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  // NEW: Function to handle deletion
  const onDelete = async () => {
    try {
      setIsDeleting(true);
      // We send videoUrl: null to signal deletion
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, { videoUrl: null });
      toast.success("Video deleted");
      router.refresh();
      // If we were editing, close the edit mode
      if (isEditing) setIsEditing(false);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4 dark:bg-slate-200">
      <div className="font-medium flex items-center justify-between">
        Chapter video
        <div className="flex items-center gap-x-2">
          {/* Delete Button: Only show if video exists and not currently editing */}
          {initialData.videoUrl && !isEditing && (
             <Button
               onClick={onDelete}
               disabled={isDeleting}
               variant="destructive" 
               size="sm"
             >
               <Trash className="h-4 w-4" />
             </Button>
          )}
          
          <Button onClick={toggleEdit} variant="ghost">
            {isEditing && (
              <>Cancel</>
            )}
            {!isEditing && !initialData.videoUrl && (
              <>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add a video
              </>
            )}
            {!isEditing && initialData.videoUrl && (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edit video
              </>
            )}
          </Button>
        </div>
      </div>
      
      {!isEditing && (
        !initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-100 rounded-md dark:bg-slate-100">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer
              playbackId={initialData?.muxData?.playbackId || ""}
              className="w-full h-full rounded-md" 
              accentColor="#2563eb"
            />
          </div>
        )
      )}

      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload this chapter&apos;s video
          </div>
        </div>
      )}
      
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take a few minutes to process. Refresh the page if video does not appear.
        </div>
      )}
    </div>
  )
}