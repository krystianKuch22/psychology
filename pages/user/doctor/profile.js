import { useRouter } from "next/router";

export default function SpecialistProfile() {
  const loginSession = false;
  const router = useRouter();

  if (!loginSession) router.push("/user/doctor/register");
  return <>Witam na stronie lekarza</>;
}
