import Link from 'next/link';
import { Form } from '@/app/_ui/form';
import { signIn } from '@/app/_auth/archive-auth';
import { SubmitButton } from '@/app/_ui/submit-button';

export default function Login() {
    return (
        <div className="flex h-full items-center justify-center bg-gray-900">
            <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-900 shadow-xl">
                <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-800 bg-gray-800 px-4 py-6 pt-8 text-center sm:px-16">
                    <h3 className="text-xl font-semibold">Sign In</h3>
                    <p className="text-sm text-gray-200">
                        Use your email and password to sign in
                    </p>
                </div>
                <Form
                    action={async (formData: FormData) => {
                        'use server';
                        await signIn('credentials', {
                            redirectTo: '/dashboard',
                            email: formData.get('email') as string,
                            password: formData.get('password') as string,
                        });
                    }}
                >
                    <SubmitButton>Sign in</SubmitButton>
                    <p className="text-center text-sm ">
                        {"Don't have an account? "}
                        <Link href="/register" className="font-semibold text-gray-200">
                            Sign up
                        </Link>
                        {' for free.'}
                    </p>
                </Form>
            </div>
        </div>
    );
}
