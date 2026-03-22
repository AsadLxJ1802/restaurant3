import { createNavigation } from 'next-intl/navigation';
import { routing } from './rounting';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);