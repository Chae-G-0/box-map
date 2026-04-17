import useResponsive from "@/hooks/useResponsive";
import { useSignInWithOauth } from "@/hooks/mutations/useSignInWithOauth";
import googleIcon from "@/assets/googleIcon.svg";
import kakaoIcon from "@/assets/kakaoIcon.svg";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@base-ui/react";

export default function SignInPage() {
  const { isMobile } = useResponsive();
  const { mutate: signInWithOauth, isPending: isSignInPending } =
    useSignInWithOauth();
  const navigate = useNavigate();

  const handleSignInWithKakaoClick = () => {
    signInWithOauth("kakao");
  };
  const handleSignInWithGoogleClick = () => {
    signInWithOauth("google");
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center p-6">
      <div
        className="absolute top-6 left-5 flex cursor-pointer items-center justify-center"
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="text-gray-500" />
        <p className="text-[14px] text-gray-500">홈으로</p>
      </div>
      <p className="mb-4 text-[24px] font-bold">로그인</p>
      <Button
        className={`${isMobile ? `w-full` : `w-80`} mb-2 flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[6px] bg-[#FEE500]`}
        onClick={handleSignInWithKakaoClick}
        disabled={isSignInPending}
      >
        <img src={kakaoIcon} alt="kakao icon" />
        <p>카카오 계정으로 로그인</p>
      </Button>
      <Button
        className={`${isMobile ? `w-full` : `w-80`} flex h-12 cursor-pointer items-center justify-center rounded-[6px] bg-[#f2f2f2]`}
        onClick={handleSignInWithGoogleClick}
        disabled={isSignInPending}
      >
        <img src={googleIcon} alt="google icon" />
        <p>Google 계정으로 로그인</p>
      </Button>
    </div>
  );
}
