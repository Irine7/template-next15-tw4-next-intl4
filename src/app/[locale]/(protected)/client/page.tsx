"use client";

import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useTranslations } from "next-intl";

const ClientPage = () => {
  const user = useCurrentUser();
  const t =  useTranslations('ClientPage');

  return (
    <UserInfo
      user={user}
      label={t('title')}
    />
  );
};

export default ClientPage;
