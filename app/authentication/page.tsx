import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PiSoccerBallFill } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/new-york/button";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/new-york/card";
import { Input } from "@/components/ui/new-york/input";
import { Label } from "@/components/ui/new-york/label";
import { Button } from "@/components/ui/new-york/button";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden relative h-screen flex flex-col items-center justify-center px-8">
        <video
          src="/bgvideo.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-4 top-4 flex items-center text-lg font-medium text-white">
          <PiSoccerBallFill className="mr-2 h-6 w-6" />
          Football
        </div>
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8 text-white"
          )}
        >
          Login
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 z-20 backdrop-blur-xl text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-white">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-xs text-white">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="absolute bottom-8 left-4 z-20 px-4 text-white">
          <blockquote className="space-y-2">
            <p className="text-sm">
              &ldquo;Soccer is simple, but it is difficult to play
              simple.&rdquo;
            </p>
            <footer className="text-xs">Johan Cruyff</footer>
          </blockquote>
        </div>
      </div>
      {/* PC */}

      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <video
            src="/bgvideo.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-zinc-900" /> */}
          <div className="relative z-20 flex items-center text-lg font-medium">
            <PiSoccerBallFill className="mr-2 h-6 w-6" />
            Football
          </div>
          <div className="relative z-20 mt-auto max-w-3xl">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;It's like everything in football - and life. You need to
                look, you need to think, you need to move, you need to find
                space, you need to help others. It's very simple in the
                end.&rdquo;
              </p>
              <footer className="text-sm">Johan Cruyff</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
