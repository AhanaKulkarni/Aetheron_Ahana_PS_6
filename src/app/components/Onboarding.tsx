import { motion } from "framer-motion";
import { UserRole } from '@/lib/mock-data.ts';
import { Factory, Package, Settings, Shield } from 'lucide-react';

interface OnboardingProps {
  onRoleSelect: (role: UserRole) => void;
}

export function Onboarding({ onRoleSelect }: OnboardingProps) {
  const roles = [
    {
      id: 'buyer' as UserRole,
      title: 'Machine Buyer',
      description: 'Purchase machines, spare parts, and raw materials',
      icon: Factory,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'manufacturer' as UserRole,
      title: 'Manufacturer / Supplier',
      description: 'List products and manage sales',
      icon: Settings,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'service_partner' as UserRole,
      title: 'Service Partner',
      description: 'Provide installation and maintenance services',
      icon: Package,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'admin' as UserRole,
      title: 'Platform Admin',
      description: 'Manage users, approvals, and operations',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-white mb-4">
            Industrial Purchasing Platform
          </h1>
          <p className="text-xl text-slate-300">
            Fast, confident industrial purchasing with reduced risk
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onRoleSelect(role.id)}
                className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {role.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-slate-400 mt-12 text-sm"
        >
          Trusted by 10,000+ industrial buyers and 500+ verified manufacturers
        </motion.p>
      </div>
    </div>
  );
}
