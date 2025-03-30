import { currentUser } from "@/lib/auth";
import UserInfo from "@/components/user-info";
import { getTranslations } from 'next-intl/server';

export default async function ServerPage() {
  const user = await currentUser();
  const t = await getTranslations('ServerPage');

  return (
    <UserInfo
      user={user}
      label={t('title')}
    />
  );
}
