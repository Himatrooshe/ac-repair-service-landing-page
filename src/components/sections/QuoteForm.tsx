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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Success message */}
              <div 
                className="bg-cover bg-center bg-no-repeat p-12 lg:p-16 flex items-center"
                style={{
                  backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)'
                }}
              >
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg mb-6">
                    We have received your quote request and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Quote
                  </button>
                </div>
              </div>

              {/* Right side - Image */}
              <div 
                className="bg-cover bg-center bg-no-repeat h-96 lg:h-auto"
                style={{ backgroundImage: 'url(/img/carousel-2.jpg)' }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div 
              className="bg-cover bg-center bg-no-repeat p-12 lg:p-16 flex items-center"
              style={{
                backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)'
              }}
            >
              <div className="text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  For Individuals And Organisations
                </h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Get professional AC repair services tailored for both individual customers and business organizations. 
                  We provide comprehensive solutions with transparent pricing and guaranteed satisfaction.
                </p>
                <button className="btn-primary">
                  More Details
                </button>
              </div>
            </div>

            {/* Right side - Form */}
            <div 
              className="bg-cover bg-center bg-no-repeat p-12 lg:p-16"
              style={{ backgroundImage: 'url(/img/carousel-2.jpg)' }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Mobile
                      </label>
                      <input
                        {...register('mobile')}
                        type="tel"
                        id="mobile"
                        className="form-control"
                        placeholder="Your Mobile"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        className="form-control"
                      >
                        <option value="">Select Service</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="cooling-services">Cooling Services</option>
                        <option value="heating-services">Heating Services</option>
                        <option value="maintenance">Maintenance & Repair</option>
                        <option value="air-quality">Indoor Air Quality</option>
                        <option value="inspection">Annual Inspections</option>
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="form-control"
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
