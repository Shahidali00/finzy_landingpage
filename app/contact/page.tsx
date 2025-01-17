import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help. Get in touch with us for any questions, feedback, or support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible. We value your feedback and are always here to assist you.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-4">
                    <Input placeholder="Your name" type="text" className="hover:border-indigo-500 focus:border-indigo-500 transition-colors" />
                    <Input placeholder="Your email" type="email" className="hover:border-indigo-500 focus:border-indigo-500 transition-colors" />
                    <Textarea placeholder="Your message" className="hover:border-indigo-500 focus:border-indigo-500 transition-colors" />
                    <Button type="submit" className="hover:bg-indigo-700 transition-colors">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span>support@finzy.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <span>123 Finance Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How secure is my financial data with Finzy?</h3>
                <p className="text-gray-500 dark:text-gray-400">We use bank-level encryption and security measures to protect your information. Your data is always encrypted and we never store your bank login credentials.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Can I use Finzy on multiple devices?</h3>
                <p className="text-gray-500 dark:text-gray-400">Yes, Finzy is available on both mobile and web platforms. Your data syncs across all your devices, allowing you to manage your finances anywhere, anytime.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How often is my financial data updated?</h3>
                <p className="text-gray-500 dark:text-gray-400">Finzy updates your financial data in real-time for most banks and financial institutions. For some institutions, updates may occur every few hours.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What if I need help using Finzy?</h3>
                <p className="text-gray-500 dark:text-gray-400">Our support team is always ready to assist you. You can reach out to us via email, phone, or through the in-app chat feature for prompt assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Connect With Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Follow us on social media for the latest updates, financial tips, and more.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
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

