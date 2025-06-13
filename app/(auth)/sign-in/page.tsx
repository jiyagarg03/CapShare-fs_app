"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>CapShare</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              CapShare makes screen recording easy. From quick walkthroughs to
              full presentations, it&apos;s fast, smooth, and shareable in
              seconds
            </p>
            <article>
              <Image
                src="/assets/images/jiya.png"
                alt="jiya"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Jiya Garg</h2>
                <p>Software Engineer, XYZ company</p>
              </div>
            </article>
          </section>
        </div>
        <p>© CapShare {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>CapShare</h1>
          </Link>
          <p>
            Create and sahre your very first <span>CapShare video</span> in no
            time!
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span> Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
