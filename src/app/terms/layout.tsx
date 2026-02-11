import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms and Conditions - Robust India",
    description: "Read the terms and conditions for using Robust India's chemical trade and logistics services.",
    alternates: {
        canonical: "https://robustindia.com/terms",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
