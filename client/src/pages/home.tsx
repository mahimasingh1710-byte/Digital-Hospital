import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactModal } from "@/components/contact-modal";
import { DemoModal } from "@/components/demo-modal";
import { 
  Star, 
  Users, 
  Heart, 
  BarChart3, 
  FileText, 
  CheckCircle, 
  DollarSign, 
  Shield, 
  Zap,
  Menu
} from "lucide-react";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-xl font-bold text-foreground">Digital Hospital Digital India</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                data-testid="nav-contact-us"
              >
                Contact Us
              </Button>
            </nav>
            <button className="md:hidden" data-testid="mobile-menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Digitalise Your Hospital in Just <span className="text-primary">few hours</span> 🚀
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Smart Hospital Management System for Appointments, Billing, and Patient Records. Transform your healthcare operations with cutting-edge technology.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all shadow-lg"
                  data-testid="hero-contact-us"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals using digital technology and tablets" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live System Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Designed for Every Healthcare Professional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive system adapts to your entire hospital workflow, from front desk to patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all group" data-testid="feature-receptionists">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Receptionists</h3>
                <p className="text-muted-foreground">Quick patient registration, appointment booking, and billing management all in one streamlined interface.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group" data-testid="feature-doctors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Doctors</h3>
                <p className="text-muted-foreground">Daily queue management, complete patient history, digital notes and prescriptions at your fingertips.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group" data-testid="feature-admins">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/70 transition-colors">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Admins</h3>
                <p className="text-muted-foreground">Staff management, doctor schedules, comprehensive reports and analytics for informed decision making.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group" data-testid="feature-patients">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Patients</h3>
                <p className="text-muted-foreground">Smooth check-in process, digital OPD slips, and QR code convenience for a modern healthcare experience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your hospital digitized quickly with our streamlined implementation process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center" data-testid="step-1">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Register Patients</h3>
              <p className="text-muted-foreground text-lg">UHID generated instantly upon registration. Quick patient onboarding with minimal paperwork.</p>
            </div>

            <div className="text-center" data-testid="step-2">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Book & Collect</h3>
              <p className="text-muted-foreground text-lg">Schedule appointments and collect fees digitally. Automated billing and payment processing.</p>
            </div>

            <div className="text-center" data-testid="step-3">
              <div className="w-20 h-20 bg-accent/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-foreground">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Digital Consultation</h3>
              <p className="text-muted-foreground text-lg">Doctors consult and update prescriptions digitally. Complete patient record management.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
              alt="Digital hospital workflow process" 
              className="rounded-2xl shadow-xl mx-auto w-full max-w-4xl h-auto"
              data-testid="workflow-image"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our System?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for Indian healthcare needs with world-class security and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="benefit-easy">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">No IT background needed. Intuitive interface designed for healthcare professionals.</p>
            </div>

            <div className="text-center" data-testid="benefit-affordable">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground">Flexible pricing for small clinics to large hospitals. ROI guaranteed in 6 months.</p>
            </div>

            <div className="text-center" data-testid="benefit-secure">
              <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Compliant</h3>
              <p className="text-muted-foreground">HIPAA-compliant security. All data stored securely in India with 99.9% uptime.</p>
            </div>

            <div className="text-center" data-testid="benefit-scalable">
              <div className="w-16 h-16 bg-accent/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Scalable Solution</h3>
              <p className="text-muted-foreground">Start with OPD, expand to IPD, ICU, labs, and pharmacy as your hospital grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our system transforms hospital operations across India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="shadow-lg" data-testid="testimonial-doctor">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground text-lg italic mb-4">"This system reduced patient wait times by 40%. Our patients are much happier with the streamlined process."</p>
                      <div>
                        <p className="font-semibold text-foreground">Dr. Priya Sharma</p>
                        <p className="text-muted-foreground">Chief Medical Officer, City Hospital</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg" data-testid="testimonial-admin">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-foreground text-lg italic mb-4">"We finally have daily revenue reports without manual effort. The insights help us make better business decisions."</p>
                      <div>
                        <p className="font-semibold text-foreground">Rajesh Kumar</p>
                        <p className="text-muted-foreground">Hospital Administrator, MedCare Solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern hospital reception with digital systems" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="testimonials-image"
              />
              <div className="absolute top-6 right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Check-in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to grow with your healthcare facility.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-fit grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="monthly">
              <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card data-testid="plan-starter">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                  <p className="text-muted-foreground mb-4">Perfect for small clinics</p>
                  <div className="space-y-2">
                    <div className="text-2xl text-muted-foreground line-through">₹5,000<span className="text-sm">/month</span></div>
                    <div className="text-4xl font-bold text-foreground">₹3,000<span className="text-lg text-muted-foreground">/month</span></div>
                    <div className="text-sm text-secondary font-semibold">40% OFF</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Up to 3 doctors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Receptionist access & management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Admin access & controls</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Advanced reports & analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">QR code patient management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Priority phone support</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setIsContactModalOpen(true)}
                  data-testid="plan-starter-button"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Hospital Plan (Featured) */}
            <Card className="bg-primary text-primary-foreground transform scale-105 relative" data-testid="plan-hospital">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Hospital OPD</h3>
                  <p className="opacity-90 mb-4">For growing hospitals</p>
                  <div className="space-y-2">
                    <div className="text-2xl opacity-75 line-through">₹20,000<span className="text-sm">/month</span></div>
                    <div className="text-4xl font-bold">₹12,000<span className="text-lg opacity-75">/month</span></div>
                    <div className="text-sm text-secondary-foreground font-semibold">40% OFF</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">Unlimited doctors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">Receptionist access & management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">Admin access & controls</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">Advanced reports & analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">QR code patient management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                    <span className="opacity-90">Priority phone support</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  onClick={() => setIsContactModalOpen(true)}
                  data-testid="plan-hospital-button"
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card data-testid="plan-enterprise">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">For large healthcare networks</p>
                  <div className="text-4xl font-bold text-foreground">Custom<span className="text-lg text-muted-foreground"> pricing</span></div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Unlimited doctors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Receptionist access & management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Admin access & controls</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Advanced reports & analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">QR code patient management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Priority phone support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">IPD, ICU management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Lab & pharmacy integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Multi-location support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Dedicated account manager</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setIsContactModalOpen(true)}
                  data-testid="plan-enterprise-button"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Starter Plan - Yearly */}
                <Card data-testid="plan-starter-yearly">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                      <p className="text-muted-foreground mb-4">Perfect for small clinics</p>
                      <div className="space-y-2">
                        <div className="text-2xl text-muted-foreground line-through">₹36,000<span className="text-sm">/year</span></div>
                        <div className="text-4xl font-bold text-foreground">₹10,800<span className="text-lg text-muted-foreground">/year</span></div>
                        <div className="text-sm text-secondary font-semibold">70% OFF</div>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Up to 3 doctors</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Receptionist access & management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Admin access & controls</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Advanced reports & analytics</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">QR code patient management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Priority phone support</span>
                      </li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setIsContactModalOpen(true)}
                      data-testid="plan-starter-yearly-button"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* Hospital Plan - Yearly (Featured) */}
                <Card className="bg-primary text-primary-foreground transform scale-105 relative" data-testid="plan-hospital-yearly">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Hospital OPD</h3>
                      <p className="opacity-90 mb-4">For growing hospitals</p>
                      <div className="space-y-2">
                        <div className="text-2xl opacity-75 line-through">₹2,40,000<span className="text-sm">/year</span></div>
                        <div className="text-4xl font-bold">₹72,000<span className="text-lg opacity-75">/year</span></div>
                        <div className="text-sm text-secondary-foreground font-semibold">70% OFF</div>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">Unlimited doctors</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">Receptionist access & management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">Admin access & controls</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">Advanced reports & analytics</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">QR code patient management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                        <span className="opacity-90">Priority phone support</span>
                      </li>
                    </ul>
                    <Button 
                      variant="secondary" 
                      className="w-full" 
                      onClick={() => setIsContactModalOpen(true)}
                      data-testid="plan-hospital-yearly-button"
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>

                {/* Enterprise Plan - Yearly */}
                <Card data-testid="plan-enterprise-yearly">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                      <p className="text-muted-foreground mb-4">For large healthcare networks</p>
                      <div className="text-4xl font-bold text-foreground">Custom<span className="text-lg text-muted-foreground"> pricing</span></div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Unlimited doctors</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Receptionist access & management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Admin access & controls</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Advanced reports & analytics</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">QR code patient management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Priority phone support</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">IPD, ICU management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Lab & pharmacy integration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Multi-location support</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">Dedicated account manager</span>
                      </li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setIsContactModalOpen(true)}
                      data-testid="plan-enterprise-yearly-button"
                    >
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to make your hospital digital?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare facilities already using our system. Get started with a free consultation today.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all shadow-lg bg-white text-primary hover:bg-white/90"
              data-testid="final-cta-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-8 h-8 text-primary" fill="currentColor" />
                <span className="text-xl font-bold">Digital Hospital Digital India</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Transforming healthcare operations with intelligent digital solutions. Trusted by hospitals across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/80">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-background transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-background transition-colors">Pricing</button></li>
                <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><button onClick={() => setIsContactModalOpen(true)} className="hover:text-background transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">&copy; 2024 Digital Hospital Digital India. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}
