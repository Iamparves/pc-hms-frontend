import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FormModal = ({ children, title }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("..");
  };

  return (
    <div>
      <Dialog onOpenChange={handleClose} defaultOpen>
        <DialogContent className="w-full max-w-[780px] gap-0 p-0">
          <DialogHeader
            className={
              "flex w-full flex-row items-center justify-between gap-5 space-y-0 border-b px-5 py-4"
            }
          >
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <button onClick={handleClose} className="text-2xl text-red-500">
              <MdOutlineClose />
            </button>
          </DialogHeader>
          <div className="p-5">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormModal;
