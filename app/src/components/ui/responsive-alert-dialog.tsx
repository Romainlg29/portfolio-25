import * as React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./button";

type ResponsiveAlertDialogProps = {
  title: string;
  description: string;

  trigger: React.ReactNode;

  confirm: string;
  cancel: string;
  onConfirm: () => void;
};

export const ResponsiveAlertDialog: React.FC<ResponsiveAlertDialogProps> = (
  props
) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>{props.trigger}</AlertDialogTrigger>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>{props.title}</AlertDialogTitle>
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{props.cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={props.onConfirm}>
              {props.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{props.trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-xl">{props.title}</DrawerTitle>
          <DrawerDescription className="text-md">
            {props.description}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2 flex-row">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              {props.cancel}
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full" onClick={props.onConfirm}>
              {props.confirm}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
