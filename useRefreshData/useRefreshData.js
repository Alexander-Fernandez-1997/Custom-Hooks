import { useRouter } from "next/router";

const router = useRouter();
export const useRefreshData = () => router.replace(router.asPath);
