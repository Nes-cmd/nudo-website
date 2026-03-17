<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Business;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $businesses = [
            [
                'name' => 'Tech Solutions Inc.',
                'description' => 'Leading provider of innovative technology solutions for growing companies.',
                'category' => 'Technology',
                'image' => 'https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://techsolutions.example.com',
                'services' => ['Cloud Infrastructure', 'API Design', 'DevOps'],
                'available' => true,
            ],
            [
                'name' => 'Creative Design Studio',
                'description' => 'Award-winning studio crafting memorable brands and immersive digital experiences.',
                'category' => 'Design',
                'image' => 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://creativedesign.example.com',
                'services' => ['Brand Identity', 'UI/UX Design', 'Product Design'],
                'available' => true,
            ],
            [
                'name' => 'Digital Marketing Pro',
                'description' => 'Performance-focused marketing team helping brands scale globally.',
                'category' => 'Marketing',
                'image' => 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://marketingpro.example.com',
                'services' => ['SEO', 'Paid Campaigns', 'Content Strategy'],
                'available' => true,
            ],
            [
                'name' => 'Legal Advisors Group',
                'description' => 'Expert legal counsel for businesses navigating complex regulatory environments.',
                'category' => 'Legal',
                'image' => 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => null, // No website
                'services' => ['Corporate Law', 'Contract Review', 'Compliance'],
                'available' => true,
            ],
            [
                'name' => 'Financial Consulting Hub',
                'description' => 'Strategic financial planning and consulting services for businesses of all sizes.',
                'category' => 'Finance',
                'image' => 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://financialhub.example.com',
                'services' => ['Financial Planning', 'Tax Consulting', 'Investment Advisory'],
                'available' => true,
            ],
            [
                'name' => 'HR Solutions Plus',
                'description' => 'Comprehensive human resources services to help businesses build great teams.',
                'category' => 'Human Resources',
                'image' => 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://hrsolutions.example.com',
                'services' => ['Recruitment', 'Training & Development', 'HR Consulting'],
                'available' => true,
            ],
            [
                'name' => 'Accounting Experts',
                'description' => 'Professional accounting and bookkeeping services for modern businesses.',
                'category' => 'Accounting',
                'image' => 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => null, // No website
                'services' => ['Bookkeeping', 'Tax Preparation', 'Financial Reporting'],
                'available' => true,
            ],
            [
                'name' => 'Real Estate Partners',
                'description' => 'Commercial real estate services helping businesses find the perfect space.',
                'category' => 'Real Estate',
                'image' => 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://realestatepartners.example.com',
                'services' => ['Property Management', 'Leasing', 'Real Estate Consulting'],
                'available' => true,
            ],
            [
                'name' => 'IT Support Services',
                'description' => 'Reliable IT support and managed services to keep your business running smoothly.',
                'category' => 'IT Services',
                'image' => 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'website' => 'https://itsupport.example.com',
                'services' => ['Network Management', 'Help Desk Support', 'System Maintenance'],
                'available' => true,
            ],
        ];

        foreach ($businesses as $business) {
            Business::create($business);
        }
    }
}
