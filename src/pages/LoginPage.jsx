import { createClient } from "@supabase/supabase-js"

export default function LoginPage() {
    const supabase = createClient(
        "https://onesbduovbzhscrqpfsw.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZXNiZHVvdmJ6aHNjcnFwZnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNTM5OTMsImV4cCI6MjA0MzcyOTk5M30.K1IAz_VLshWln1ZuGdTw0qK_E1DGdD4ZlX8hYB3osHA"
    )

    const handleSignin = async () => {
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

        if (error) {
            throw error;
        }
        console.log(user);
    }

    return (
        <div>
            <button onClick={handleSignin}>Sign in with Google</button>
        </div>
    )
}