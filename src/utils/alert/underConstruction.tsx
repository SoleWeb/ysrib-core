import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface AlertProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  cancel: string;
  confirm: string;
}

const Alert = ({
  open,
  onOpenChange,
  title,
  description,
  cancel,
  confirm,
}: AlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>
        <button className="hidden" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction>{confirm}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;

interface UnderConstructionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UnderConstruction = ({
  open,
  onOpenChange,
}: UnderConstructionProps) => {
  return (
    <Alert
      open={open}
      onOpenChange={onOpenChange}
      title="Page Under Construction"
      description="This page is currently under construction. Please check back later."
      cancel="Cancel"
      confirm="Okay, No Problem"
    />
  );
};
