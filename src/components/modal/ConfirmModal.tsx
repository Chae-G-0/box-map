import { useConfirmModal } from "@/store/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

export default function ConfirmModal() {
  const {
    isConfirmOpen,
    closeConfirmModal,
    title,
    content,
    submitButtonText,
    onSubmit,
  } = useConfirmModal();

  return (
    <Dialog open={isConfirmOpen} onOpenChange={closeConfirmModal}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {content}
        <DialogFooter>
          <Button variant="default" onClick={closeConfirmModal}>
            취소
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              onSubmit?.();
              closeConfirmModal();
            }}
          >
            {submitButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
