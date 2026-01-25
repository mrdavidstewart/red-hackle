import { Star } from "lucide-react"

export function SocialReviewBadge() {
    const socialLinks = [
        {
            name: "Google",
            url: "https://share.google/u2UfQm1m2W8SZQqba",
            icon: "🔍",
            label: "Visit Red Hackle on Google",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61555545779742",
            icon: "f",
            label: "Visit Red Hackle on Facebook",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/red-hackle-cleaning-services",
            icon: "in",
            label: "Visit Red Hackle on LinkedIn",
        },
    ]

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Google Review Badge */}
            <a
                href="https://search.google.com/local/writereview?placeid=ChIJR0u96mlI9IoRuloi_-UDkeg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-200 transition-colors hover:border-destructive hover:text-destructive"
                aria-label="Review Red Hackle on Google"
            >
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <span className="font-medium">Review on Google</span>
                <div className="flex gap-0.5" aria-label="5 stars">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <Star
                                key={i}
                                className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500"
                                aria-hidden="true"
                            />
                        ))}
                </div>
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500" aria-hidden="true">
                    Follow us
                </span>
                <div className="flex gap-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 text-gray-400 transition-colors hover:border-destructive hover:bg-destructive/10 hover:text-destructive"
                            aria-label={link.label}
                            title={link.name}
                        >
                            {link.name === "Google" && (
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            )}
                            {link.name === "Facebook" && (
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            )}
                            {link.name === "LinkedIn" && (
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.83 0-9.749h3.554v1.381c.43-.664 1.199-1.61 2.925-1.61 2.136 0 3.738 1.393 3.738 4.389v5.589zM5.337 9.764c-1.142 0-1.889-.755-1.889-1.698 0-.957.747-1.698 1.928-1.698 1.181 0 1.888.741 1.907 1.698 0 .943-.726 1.698-1.907 1.698zm1.583 10.688H3.772V9.719h3.148v10.733zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
