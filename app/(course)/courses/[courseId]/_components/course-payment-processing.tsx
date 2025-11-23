"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CoursePaymentProcessing = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 2000);

    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <Loader2 className="h-10 w-10 animate-spin text-sky-700" />
      <h2 className="text-xl font-medium">Processing your payment...</h2>
      <p className="text-muted-foreground text-sm text-center max-w-xs">
        We are confirming your purchase with Stripe. This usually takes a few seconds.
      </p>
      {showButton && (
        <div className="flex flex-col items-center gap-y-2">
          <Button onClick={() => window.location.reload()} variant="outline" size="sm">
            Check for access
          </Button>
          <p className="text-xs text-muted-foreground">
            Still waiting? Ensure your payment was completed.
          </p>
        </div>
      )}
    </div>
  );
}
