"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export const CoursePaymentProcessing = () => {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 2000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <Loader2 className="h-10 w-10 animate-spin text-sky-700" />
      <h2 className="text-xl font-medium">Processing your payment...</h2>
      <p className="text-muted-foreground text-sm">
        This usually takes a few seconds. Please wait.
      </p>
    </div>
  );
}
