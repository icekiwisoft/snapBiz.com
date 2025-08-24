// All icons are imported from @heroicons/react/24/outline for use throughout the application.
// This file now also exports HomeIcon and StarIcon for use in other modules.
// Comments are in English as per codebase standards.

import {
  // Navigation & UI
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon, // Added HomeIcon
  StarIcon, // Added StarIcon

  // Status & Actions
  CheckIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,

  // Business & Data
  BuildingOfficeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  UserIcon,
  CogIcon,

  // Design & Media
  SwatchIcon,
  PaintBrushIcon,
  PhotoIcon,
  FilmIcon,

  // Technology
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  GlobeAltIcon,

  // Communication
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,

  // Social Media
  ShareIcon,
  HeartIcon,
  BookmarkIcon,

  // Time & Calendar
  ClockIcon,
  CalendarIcon,
  CalendarDaysIcon,

  // Location & Travel
  MapPinIcon,

  // Security & Privacy
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,

  // Analytics & Metrics
  ChartBarSquareIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,

  // Files & Documents
  DocumentIcon,
  FolderIcon,
  ArchiveBoxIcon,

  // Settings & Configuration
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

// Export all icons for use throughout the application, including HomeIcon and StarIcon
export {
  // Navigation & UI
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon, // Added HomeIcon
  StarIcon, // Added StarIcon

  // Status & Actions
  CheckIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,

  // Business & Data
  BuildingOfficeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  UserIcon,
  CogIcon,

  // Design & Media
  SwatchIcon,
  PaintBrushIcon,
  PhotoIcon,
  FilmIcon,

  // Technology
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  GlobeAltIcon,

  // Communication
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,

  // Social Media
  ShareIcon,
  HeartIcon,
  BookmarkIcon,

  // Time & Calendar
  ClockIcon,
  CalendarIcon,
  CalendarDaysIcon,

  // Location & Travel
  MapPinIcon,

  // Security & Privacy
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,

  // Analytics & Metrics
  ChartBarSquareIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,

  // Files & Documents
  DocumentIcon,
  FolderIcon,
  ArchiveBoxIcon,

  // Settings & Configuration
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon
};

// Icon mapping for common use cases
export const IconMap = {
  // Common actions
  search: MagnifyingGlassIcon,
  close: XMarkIcon,
  menu: Bars3Icon,
  check: CheckIcon,
  error: XCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  home: HomeIcon, // Added HomeIcon to IconMap
  star: StarIcon, // Added StarIcon to IconMap

  // Business
  company: BuildingOfficeIcon,
  document: DocumentTextIcon,
  chart: ChartBarIcon,
  money: CurrencyDollarIcon,
  card: CreditCardIcon,
  user: UserIcon,
  settings: CogIcon,

  // Design
  color: SwatchIcon,
  paint: PaintBrushIcon,
  image: PhotoIcon,
  video: FilmIcon,

  // Technology
  code: CodeBracketIcon,
  terminal: CommandLineIcon,
  server: ServerIcon,
  globe: GlobeAltIcon,

  // Communication
  email: EnvelopeIcon,
  phone: PhoneIcon,
  chat: ChatBubbleLeftRightIcon,

  // Social
  share: ShareIcon,
  like: HeartIcon,
  bookmark: BookmarkIcon,

  // Time
  time: ClockIcon,
  calendar: CalendarIcon,
  calendarDays: CalendarDaysIcon,

  // Location
  location: MapPinIcon,
  world: GlobeAltIcon,

  // Security
  shield: ShieldCheckIcon,
  lock: LockClosedIcon,
  key: KeyIcon,

  // Analytics
  analytics: ChartBarSquareIcon,
  trendUp: ArrowTrendingUpIcon,
  trendDown: ArrowTrendingDownIcon,

  // Files
  file: DocumentIcon,
  folder: FolderIcon,
  archive: ArchiveBoxIcon,

  // Configuration
  config: Cog6ToothIcon,
  adjustments: AdjustmentsHorizontalIcon,
  tools: WrenchScrewdriverIcon
};

// Helper function to get icon component by name
export const getIcon = (name: keyof typeof IconMap) => {
  return IconMap[name] || InformationCircleIcon;
};