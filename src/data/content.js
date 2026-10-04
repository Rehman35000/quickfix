export const steps = [
  {
    number: '01',
    title: 'Choose a Service',
    description: 'Select what you need from our available campus services.',
    icon: 'sliders',
  },
  {
    number: '02',
    title: 'Place Your Order',
    description: 'Provide the required details and submit your request.',
    icon: 'clipboard',
  },
  {
    number: '03',
    title: 'Get Matched',
    description: 'A nearby QuickFixer accepts your request.',
    icon: 'users',
  },
  {
    number: '04',
    title: 'Task Gets Done',
    description: 'Your QuickFixer completes the service.',
    icon: 'sparkles',
  },
  {
    number: '05',
    title: 'Receive Your Order',
    description: 'Get your item, document, or service completed.',
    icon: 'package',
  },
  {
    number: '06',
    title: 'Pay Easily',
    description: 'Pay online or in cash.',
    icon: 'wallet',
  },
]

export const dashboardStats = [
  { label: 'Active Orders', value: '2', note: '1 in progress', trend: 'Live', icon: 'activity' },
  { label: 'Completed Orders', value: '24', note: 'This semester', trend: '+6 this week', icon: 'check' },
  { label: 'Total Saved', value: 'Rs. 3,150', note: 'vs. off-campus rates', trend: '+12%', icon: 'wallet' },
  { label: 'QuickFix Points', value: '860', note: '140 pts to next reward', trend: 'Level 4', icon: 'sparkles' },
]

export const recentOrders = [
  {
    id: 'QF-2041',
    service: 'Printing',
    detail: '40 pages · Academic Block A',
    amount: 'Rs. 220',
    status: 'Completed',
    icon: 'printer',
    when: 'Today, 9:12 AM',
  },
  {
    id: 'QF-2045',
    service: 'Assignment Binding',
    detail: 'Spiral binding · 2 copies',
    amount: 'Rs. 180',
    status: 'In Progress',
    icon: 'book',
    when: 'Today, 11:40 AM',
  },
  {
    id: 'QF-2048',
    service: 'Stationery',
    detail: '2 notebooks, pens, folder',
    amount: 'Rs. 145',
    status: 'Delivered',
    icon: 'pencil',
    when: 'Yesterday, 6:05 PM',
  },
  {
    id: 'QF-2052',
    service: 'Document Submission',
    detail: 'Assignment file · Dept. office',
    amount: 'Rs. 90',
    status: 'Pending',
    icon: 'file',
    when: 'Yesterday, 4:22 PM',
  },
]

export const statusStyles = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Delivered: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  'In Progress': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Pending: 'bg-slate-100 text-slate-600 ring-slate-500/20',
}

export const quickFixerBenefits = [
  {
    title: 'Flexible Schedule',
    description: 'Choose the hours that fit between your classes, labs and exams.',
    icon: 'calendar',
  },
  {
    title: 'Earn on Campus',
    description: 'Keep every rupee earned inside the campus economy you already use.',
    icon: 'wallet',
  },
  {
    title: 'Help Fellow Students',
    description: 'Solve real problems for classmates and build your campus reputation.',
    icon: 'heart',
  },
  {
    title: 'Easy Service Requests',
    description: 'Clear requests, fair service fees and no guesswork about the task.',
    icon: 'inbox',
  },
]

export const businessStats = [
  { value: '50+', label: 'Daily Orders Potential', note: 'Across printing, stationery and deliveries', icon: 'orders' },
  { value: 'Rs. 100', label: 'Average Service Fee', note: 'Blended average per completed order', icon: 'tag' },
  { value: 'Rs. 150K+', label: 'Example Monthly Service Revenue', note: 'Single campus, conservative estimate', icon: 'chart' },
  { value: '1 Campus', label: 'Easy Starting Point', note: 'Launch one campus, then expand', icon: 'campus' },
]

export const whyFeatures = [
  {
    title: 'Fast',
    description: 'Get small campus tasks handled quickly.',
    detail: 'Most requests are matched in under three minutes and completed within the same break.',
    icon: 'zap',
  },
  {
    title: 'Affordable',
    description: 'Student-friendly pricing for everyday needs.',
    detail: 'Transparent service fees agreed before the task starts. No hidden delivery charges.',
    icon: 'wallet',
  },
  {
    title: 'Nearby',
    description: 'Connect with QuickFixers already around your campus.',
    detail: 'Requests go to the closest available worker, so pickup and drop stay on campus.',
    icon: 'map',
  },
  {
    title: 'Student Powered',
    description: 'Built by students, for students.',
    detail: 'A student-run network with campus partners for printing, food and essentials.',
    icon: 'graduation',
  },
]

export const testimonials = [
  {
    quote: 'QuickFix saved me when I needed to print my assignment five minutes before class.',
    name: 'Ahmed',
    role: 'Computer Science Student',
    initials: 'AH',
    rating: 5,
  },
  {
    quote: 'Instead of leaving campus for stationery, I can just order it.',
    name: 'Sara',
    role: 'Business Student',
    initials: 'SA',
    rating: 5,
  },
  {
    quote: 'Super convenient between classes.',
    name: 'Hamza',
    role: 'IT Student',
    initials: 'HA',
    rating: 5,
  },
]

export const heroTrust = [
  { label: 'Fast Campus Service', icon: 'zap' },
  { label: 'Student-Friendly Prices', icon: 'wallet' },
  { label: 'Nearby QuickFixers', icon: 'map' },
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Become a QuickFixer', href: '#quickfixer' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const footerServiceLinks = [
  { label: 'Printing', href: '#services' },
  { label: 'Binding', href: '#services' },
  { label: 'Stationery', href: '#services' },
  { label: 'Charging', href: '#services' },
  { label: 'Deliveries', href: '#services' },
]