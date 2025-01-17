import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Briefcase, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Finzy</h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finzy is an AI-powered expense tracker designed to simplify your financial life. Our mission is to make
                  managing personal finances effortless and intelligent, helping you make better financial decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Founded in 2023, Finzy was born out of a simple idea: make personal finance management as easy and
                    intelligent as possible. Our team of finance experts and AI specialists came together to create a
                    tool that not only tracks your expenses but understands your financial behavior and helps you make
                    smarter decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="hover:bg-indigo-700 transition-colors">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Finzy Team"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="600"
                  src="/placeholder.svg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">User-Centric</h3>
                <p className="text-gray-600">We put our users first in everything we do, ensuring our product meets their needs and exceeds their expectations.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Briefcase className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">We maintain the highest standards of integrity in all our actions, ensuring trust and reliability in our services.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">We continuously innovate to provide cutting-edge solutions that transform personal finance management.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Finzy, we're on a mission to democratize financial intelligence. We believe that everyone should have
                  access to smart, AI-powered tools that can help them understand and improve their financial health.
                  Our goal is to empower individuals to take control of their finances, make informed decisions, and
                  achieve their financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Finzy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
                  <p>Our advanced AI algorithms provide personalized financial insights and recommendations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
                  <p>Intuitive design makes managing your finances a breeze, even for beginners.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
                  <p>Your financial data is protected with state-of-the-art encryption and security measures.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                  <p>We're constantly improving our platform to provide you with the best financial tools.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Finzy Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Be part of a growing community of individuals taking control of their financial future. Start your journey with Finzy today and experience the power of AI-driven personal finance management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button className="w-full hover:bg-indigo-700 transition-colors">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Finzy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

