import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

export default function BottomSheetContainer({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div
      drag="y"
      animate={isOpen ? { top: `20dvh` } : { top: `calc(100dvh - 40px)` }} // 열리고 닫혔을때 바텀시트의 높이 설정
      dragConstraints={{ top: 0, bottom: 0 }} // 드래그했을때 바텀시트가 통째로 날아가지 않게 움직임 제한
      transition={{ type: "spring", bounce: 0 }} // 애니메이션 움직임 속성
      onDragEnd={(_, info) => {
        const THRESHOLD = 50; // 드래그 범위
        const dragOffsetY = info.offset.y;
        // 드래그로 이동한 거리(드래그를 시작한 지점에서 위로 드래그하면 음수, 아래로 드래그하면 양수)

        if (dragOffsetY < -THRESHOLD) {
          // 음수 = 위로 THRESHOLD보다 드래그 = bottomsheet 열림
          setIsOpen(true);
        }
        if (dragOffsetY > THRESHOLD) {
          // 양수 = 아래로 THRESHOLD보다 드래그 = bottomsheet 닫힘
          setIsOpen(false);
        }
      }}
      className={`fixed top-0 right-0 left-0 z-999 h-dvh w-full touch-none rounded-t-lg bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.15)] will-change-transform`}
    >
      <div className="flex h-10 cursor-pointer items-center justify-center border-b">
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>
      {children}
    </motion.div>
  );
}
