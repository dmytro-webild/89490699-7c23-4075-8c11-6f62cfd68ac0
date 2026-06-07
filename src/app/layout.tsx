import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Body Action Gym | Achieve Your Fitness Goals',
  description: 'Unlock your full potential at Body Action Gym. State-of-the-art facilities, expert personal trainers, and diverse group classes for all fitness levels. Join our community today!',
  keywords: ["gym, fitness, workout, personal training, group classes, health, wellness, exercise, strength, cardio, Body Action Gym"],
  openGraph: {
    "title": "Body Action Gym | Achieve Your Fitness Goals",
    "description": "Unlock your full potential at Body Action Gym. State-of-the-art facilities, expert personal trainers, and diverse group classes for all fitness levels. Join our community today!",
    "url": "/",
    "siteName": "Body Action Gym",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-adult-mother-doing-fitness-with-her-little-daughter_1153-4764.jpg",
        "alt": "Athlete in a modern gym"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Body Action Gym | Achieve Your Fitness Goals",
    "description": "Unlock your full potential at Body Action Gym. State-of-the-art facilities, expert personal trainers, and diverse group classes for all fitness levels. Join our community today!",
    "images": [
      "http://img.b2bpic.net/free-photo/young-adult-mother-doing-fitness-with-her-little-daughter_1153-4764.jpg"
    ]
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
