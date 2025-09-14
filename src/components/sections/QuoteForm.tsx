'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { QuoteForm as QuoteFormType } from '@/types';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  mobile: z.string().min(10, 'Please enter a valid mobile number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormType>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormType) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Quote form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-8 xs:py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Success message */}
              <div 
                className="bg-cover bg-center bg-no-repeat p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 flex items-center min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] lg:min-h-auto"
                style={{
                  backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)'
                }}
              >
                <div className="text-center text-white w-full">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6">
                    <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 sm:mb-6">Thank You!</h3>
                  <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                    We have received your quote request and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary text-sm xs:text-base px-6 xs:px-8 py-2 xs:py-3"
                  >
                    Submit Another Quote
                  </button>
                </div>
              </div>

              {/* Right side - Image */}
              <div 
                className="bg-cover bg-center bg-no-repeat h-64 xs:h-80 sm:h-96 lg:h-auto order-first lg:order-last"
                style={{ backgroundImage: 'url(/img/carousel-2.jpg)' }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div 
              className="bg-cover bg-center bg-no-repeat p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 flex items-center min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] lg:min-h-auto order-2 lg:order-1"
              style={{
                backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)'
              }}
            >
              <div className="text-white w-full">
                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight">
                  For Individuals And Organisations
                </h3>
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 xs:mb-7 sm:mb-8 leading-relaxed">
                  Get professional AC repair services tailored for both individual customers and business organizations. 
                  We provide comprehensive solutions with transparent pricing and guaranteed satisfaction.
                </p>
                <button className="btn-primary text-sm xs:text-base px-6 xs:px-8 py-2 xs:py-3">
                  More Details
                </button>
              </div>
            </div>

            {/* Right side - Form */}
            <div 
              className="bg-cover bg-center bg-no-repeat p-4 xs:p-6 sm:p-8 md:p-10 lg:p-16 order-1 lg:order-2"
              style={{ backgroundImage: 'url(/img/carousel-2.jpg)' }}
            >
              <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-lg w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 xs:space-y-5 sm:space-y-6 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                        Your Name
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="form-control text-sm xs:text-base"
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                        Your Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="form-control text-sm xs:text-base"
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="mobile" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                        Your Mobile
                      </label>
                      <input
                        {...register('mobile')}
                        type="tel"
                        id="mobile"
                        className="form-control text-sm xs:text-base"
                        placeholder="Your Mobile"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.mobile.message}</p>
                      )}
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="serviceType" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                        Service Type
                      </label>
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        className="form-control text-sm xs:text-base w-full"
                      >
                        <option value="">Select Service Type</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="cooling-services">Cooling Services</option>
                        <option value="heating-services">Heating Services</option>
                        <option value="maintenance">Maintenance & Repair</option>
                        <option value="air-quality">Indoor Air Quality</option>
                        <option value="inspection">Annual Inspections</option>
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.serviceType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={3}
                      className="form-control text-sm xs:text-base"
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base py-2 xs:py-3"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get A Free Quote'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
