import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Thank You - Robust India",
    description: "Thank you for contacting Robust India. We have received your message and will get back to you soon.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
