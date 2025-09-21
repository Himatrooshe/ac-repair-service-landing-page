'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this URL with your Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxEhisj0zUTeELPj-OLJuP0JltqICAlOPhRoVoHDqcsgSGYjCKjfVND5zy6iO3t0YKDVw/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      
      // Reset form
      reset();
      
      // Set success status
      setSubmitStatus({
        type: 'success',
        message: 'We have received your contact info, thanks! We will get back to you within 24 hours.'
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Needed *
          </label>
          <select
            {...register('service')}
            id="service"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="AC Hydrowash">AC Hydrowash</option>
            <option value="AC Master Cleaning">AC Master Cleaning</option>
            <option value="AC Leakage Repair & Gas Charge">AC Leakage Repair & Gas Charge</option>
            <option value="AC Fitting & Shifting">AC Fitting & Shifting</option>
            <option value="AC Water Dropping Problem Solving">AC Water Dropping Problem Solving</option>
            <option value="AC Circuit Repair">AC Circuit Repair</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your AC issue or service needs..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-orange-400 hover:bg-orange-500 text-white btn-hover-lift'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              <span>Sending...</span>
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <p className="text-sm text-orange-800">
          <strong>Need immediate assistance?</strong> Call our emergency line: 
          <span className="font-semibold text-red-600"> +8801324-718981</span>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;