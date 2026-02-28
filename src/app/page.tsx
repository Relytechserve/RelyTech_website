import Link from "next/link";
import Image from "next/image";
import {
  CloudArrowUpIcon,
  ViewfinderCircleIcon,
  CodeBracketIcon,
  CircleStackIcon,
  ChartBarIcon,
  CubeIcon,
  CheckCircleIcon,
  ServerStackIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80";

const premierImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";

const services = [
  {
    icon: CloudArrowUpIcon,
    title: "Cloud Engineering",
    description: "Rely Tech helps organisations realise and develop their full potential to compete.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    icon: ViewfinderCircleIcon,
    title: "Immersive Engineering",
    description: "Immersive, interactive & imaginative experiences for the connected world.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
  },
  {
    icon: CodeBracketIcon,
    title: "Full Stack Development",
    description: "Strong technology expertise and combined knowledge in full stack development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    icon: CircleStackIcon,
    title: "Data Management",
    description: "Immersive, interactive & imaginative data solutions for modern businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: ChartBarIcon,
    title: "Engineering Analytics",
    description: "Big data insights and business analytics to increase competitiveness.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    icon: CubeIcon,
    title: "Blockchain Development",
    description: "Leveraging blockchain technology for secure and transparent business operations.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
  },
];

const premierFeatures = [
  "E-Commerce: Transforming online retail experiences to drive growth and customer satisfaction.",
  "Product Management: Enhancing product development processes for optimal market fit.",
  "Marketplaces & Retail: Streamlining operations and expanding market reach.",
  "Integration Solutions: Seamlessly connecting systems for enhanced efficiency.",
];

// Tech name -> Simple Icons slug (from cdn.jsdelivr.net/npm/simple-icons)
const techIconSlugs: Record<string, string> = {
  ".NET": "dotnet", "Go": "golang", "GraphQL": "graphql", "Java": "java",
  "Kafka": "apachekafka", "Node.js": "nodedotjs", "Python": "python", "Angular": "angular",
  "React.js": "react", "TypeScript": "typescript", "Vue": "vuedotjs", "Flutter": "flutter",
  "Kotlin": "kotlin", "React Native": "react", "Swift": "swift", "AWS": "amazonaws",
  "Docker": "docker", "K8S": "kubernetes", "Microsoft Azure": "microsoftazure",
  "ElasticSearch": "elasticsearch", "Jest": "jest", "Mocha": "mocha",
  "Selenium": "selenium", "Postman": "postman", "Rust": "rust", "Solidity": "solidity",
};

const techStackCategories: { category: string; icon: typeof ServerStackIcon; techs: string[]; cardClass: string; span?: string }[] = [
  { category: "Back-End", icon: ServerStackIcon, cardClass: "from-amber-100 to-orange-50 border-amber-200/80", span: "lg:col-span-2", techs: [".NET", "Go", "GraphQL", "Java", "Kafka", "Microservices", "No-SQL", "Node.js", "Python", "REST", "SQL"] },
  { category: "Front-End", icon: PaintBrushIcon, cardClass: "from-primary-100 to-blue-50 border-primary-200/80", techs: ["Angular", "React.js", "TypeScript", "Vue"] },
  { category: "Mobile", icon: DevicePhoneMobileIcon, cardClass: "from-emerald-100 to-teal-50 border-emerald-200/80", techs: ["Flutter", "Ionic", "Kotlin", "React Native", "Swift"] },
  { category: "Infrastructure", icon: CloudIcon, cardClass: "from-sky-100 to-blue-50 border-sky-200/80", span: "lg:col-span-2", techs: ["AWS", "Docker", "K8S", "Microsoft Azure", "ElasticSearch"] },
  { category: "QA", icon: BeakerIcon, cardClass: "from-violet-100 to-purple-50 border-violet-200/80", techs: ["Jest", "Mocha", "Selenium", "Postman"] },
  { category: "Blockchain", icon: CubeIcon, cardClass: "from-rose-100 to-pink-50 border-rose-200/80", techs: ["Rust", "Solidity"] },
];

const marqueeTechs = ["react", "python", "docker", "kubernetes", "typescript", "nodedotjs", "amazonaws", "graphql", "postgresql", "redis", "mongodb", "terraform", "jest"];

const partnerLogos = [
  { name: "eBay", slug: "ebay" },
  { name: "Amazon", slug: "amazon" },
  { name: "Walmart", slug: "walmart" },
  { name: "Shopify", slug: "shopify" },
  { name: "BigCommerce", slug: "bigcommerce" },
  { name: "WooCommerce", slug: "woocommerce" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Our Intelligent Technology Solutions and Services */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Technology solutions"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary-500/90 text-white text-sm font-semibold rounded-full mb-6">
              IT Design & Consulting
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0 animate-fade-in">
              Our Intelligent Technology
              <span className="block text-primary-400 mt-2">
                Solutions and Services
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-200 leading-relaxed opacity-0 animate-fade-in animate-delay-200">
              Our mission is to empower businesses to embrace digital transformation through
              innovative solutions and strategic insights.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-300">
              <Link
                href="/services"
                className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-all shadow-lg shadow-primary-500/25"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premier Technology Solutions Provider */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={premierImage}
                alt="Premier Technology Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                Premier Technology Solutions Provider
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Welcome to Rely Tech Serve, your trusted partner in digital transformation. We
                specialize in crafting innovative technology solutions tailored to propel
                businesses forward in the digital age.
              </p>
              <ul className="mt-8 space-y-4">
                {premierFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center">
            Comprehensive services for your business
          </h2>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{service.description}</p>
                  <span className="mt-4 inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    Discover Now
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies we work with */}
      <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />
        {/* Marquee - infinite scrolling tech logos */}
        <div className="relative py-8 overflow-hidden">
          <div className="flex animate-marquee">
            {[...marqueeTechs, ...marqueeTechs].map((slug, i) => (
              <div key={`${slug}-${i}`} className="flex-shrink-0 mx-6 w-14 h-14 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`} alt="" className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">
            Technologies we work with
          </h2>
          <p className="mt-4 text-lg text-slate-300 text-center max-w-2xl mx-auto">
            Our curated stack for building rich, performant, and scalable applications.
          </p>
          {/* Bento grid with tech cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStackCategories.map(({ category, icon: Icon, techs, cardClass, span }, idx) => (
              <div
                key={category}
                className={`group relative p-6 rounded-2xl bg-white/95 backdrop-blur-sm bg-gradient-to-br ${cardClass} border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] opacity-0 animate-slide-up animate-fill-forwards ${span ?? ""}`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 pt-2">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => {
                    const iconSlug = techIconSlugs[tech];
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 text-slate-700 text-sm font-medium rounded-lg border border-slate-200/80 shadow-sm transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:scale-105 hover:shadow-md"
                        title={tech}
                      >
                        {iconSlug ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconSlug}.svg`} alt="" className="w-4 h-4 flex-shrink-0" />
                            <span>{tech}</span>
                          </>
                        ) : (
                          <span>{tech}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos - e-commerce & Marketplaces experts */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center">
            We are e-commerce & Marketplaces experts
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-center">
            Supporting partners
          </p>
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {partnerLogos.map((partner) => (
              <div
                key={partner.slug}
                className="h-14 w-28 lg:h-16 lg:w-32 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${partner.slug}.svg`}
                  alt={partner.name}
                  className="h-12 w-auto max-h-14 lg:max-h-16 object-contain scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Give us a shout!! */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Give us a shout!!
          </h2>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            We&apos;d love to hear from you! Whether you have a question about our services, need
            assistance, or just want to share your thoughts, feel free to reach out to us.
          </p>
          <p className="mt-4 text-slate-400">
            Join us on a journey of transformation and growth. Partner with Rely Tech Serve and
            let&apos;s build a digital future together.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
            >
              Submit Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
