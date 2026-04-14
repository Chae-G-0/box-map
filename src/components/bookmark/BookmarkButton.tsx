import { useSession } from "@/store/useSession";
import useToggleBoxBookmark from "@/hooks/mutations/useToggleBoxBookmark";
import { Bookmark } from "lucide-react";
import { toast } from "sonner";

export default function BookmarkButton({
  id,
  isBookmark,
}: {
  id: string;
  isBookmark: boolean;
}) {
  const session = useSession();
  const { mutate: toggleBoxBookmark } = useToggleBoxBookmark({
    onError: (error) => {
      toast.error("북마크 요청에 실패했습니다", {
        position: "top-center",
      });
    },
  });

  const handleBookMarkClick = () => {
    if (!session) {
      return toast.error("로그인 후 북마크 가능합니다", {
        position: "top-center",
      });
    }
    toggleBoxBookmark({ boxId: id, userId: session?.user.id });
  };

  return (
    <Bookmark
      className={`${isBookmark ? `fill-amber-300 text-amber-300` : `text-gray-500`} h-5 w-5 cursor-pointer`}
      onClick={handleBookMarkClick}
    />
  );
}
