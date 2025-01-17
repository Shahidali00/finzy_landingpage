import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Smartphone, PieChart, TrendingUp, Shield, Users, Award, ArrowRight, Check, ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Finances with AI
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Finzy harnesses the power of artificial intelligence to transform your financial life. Track expenses, set intelligent budgets, and achieve your financial goals with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg">
                      Get it on Google Play
                    </Button>
                  </Link>
                  <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg">
                      Download on App Store
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Finzy App Screenshot"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                  height="600"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-indigo-800">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Smartphone className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Smart Expense Tracking</h3>
                <p className="text-gray-600">Automatically categorize and track your expenses with AI precision.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <PieChart className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Intelligent Budgeting</h3>
                <p className="text-gray-600">AI-powered budgets that adapt to your spending habits and financial goals.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <TrendingUp className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Predictive Analysis</h3>
                <p className="text-gray-600">Forecast future expenses and savings with advanced machine learning algorithms.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Shield className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Bank-Level Security</h3>
                <p className="text-gray-600">Your financial data is protected with state-of-the-art encryption and security measures.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Users className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Collaborative Finance</h3>
                <p className="text-gray-600">Share accounts and manage finances together with family or team members.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Award className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Financial Health Score</h3>
                <p className="text-gray-600">Get insights into your overall financial health with our proprietary scoring system.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How Finzy Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Your Accounts</h3>
                <p>Securely link your bank accounts and credit cards to Finzy.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p>Our AI analyzes your spending patterns and financial habits.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
                <p>Receive tailored advice and insights to improve your financial health.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-indigo-800">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Basic</h3>
                <p className="text-4xl font-bold mb-4 text-indigo-600">Free</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Expense Tracking</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Basic Budgeting</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Financial Health Score</li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-4">$9.99/mo</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-300" /> All Basic Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-300" /> AI-Powered Insights</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-300" /> Predictive Analysis</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-300" /> Unlimited Accounts</li>
                </ul>
                <Button className="mt-auto bg-white text-indigo-600 hover:bg-gray-100">Upgrade to Pro</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Business</h3>
                <p className="text-4xl font-bold mb-4 text-indigo-600">$24.99/mo</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> All Pro Features</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Team Collaboration</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Custom Reporting</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> API Access</li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <p className="mb-4">"Finzy has completely transformed how I manage my finances. The AI insights are incredibly accurate!"</p>
                <p className="font-bold">- Sarah T., Entrepreneur</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <p className="mb-4">"I've tried many finance apps, but Finzy's predictive analysis is in a league of its own. Highly recommended!"</p>
                <p className="font-bold">- Michael R., Financial Analyst</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <p className="mb-4">"The collaborative features have made managing our family budget so much easier. Thank you, Finzy!"</p>
                <p className="font-bold">- Emily and David L., Parents</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-indigo-800">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is my financial data secure with Finzy?</AccordionTrigger>
                <AccordionContent>
                  Yes, your financial data is completely secure with Finzy. We use bank-level encryption and security measures to protect your information. We never store your bank login credentials and use read-only access to your financial data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How accurate is Finzy's AI in categorizing expenses?</AccordionTrigger>
                <AccordionContent>
                  Finzy's AI is highly accurate in categorizing expenses, with an accuracy rate of over 95%. The AI continuously learns from user feedback to improve its categorization. You can also manually adjust any miscategorized expenses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use Finzy for business finances?</AccordionTrigger>
                <AccordionContent>
                  Finzy offers a Business plan specifically designed for managing business finances. It includes features like team collaboration, custom reporting, and API access for seamless integration with your existing systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How often is my financial data updated?</AccordionTrigger>
                <AccordionContent>
                  Finzy updates your financial data in real-time for most banks and financial institutions. For some institutions, updates may occur every few hours. You can always manually refresh your data within the app at any time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your Finzy subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your current billing cycle. After that, your account will revert to the free Basic plan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Financial Journey Today</h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have already transformed their financial lives with Finzy.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Get Early Access
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="hover:underline">Features</Link></li>
                <li><Link href="#pricing" className="hover:underline">Pricing</Link></li>
                <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Blog</Link></li>
                <li><Link href="#" className="hover:underline">Help Center</Link></li>
                <li><Link href="#" className="hover:underline">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-xs">© 2024 Finzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

