import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/button'

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <div className="bg-accent text-center">
            <div className="space-y-6 bg-background shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold text">Page Not Found (Yet)</h1>
                <p className="text-accent-foreground">
                    The page you’re looking for doesn’t exist right now. It might be added in the future, or you may have navigated to an
                    incorrect route.
                </p>
                <Button
                    onClick={() => navigate(-1)}
                    className="mt-4"
                >
                    Go Back
                </Button>
            </div>
        </div>
    )
}
