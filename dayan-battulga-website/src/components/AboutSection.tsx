import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me </span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Software Enginner & ML/AI Engineer
            </h3>
            <p className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aspernatur harum molestias eligendi ex facere laboriosam deserunt,
              sint assumenda quo earum ratione, voluptas voluptatem hic!
            </p>
            <p className='text-muted-foreground'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique consequuntur ipsa voluptatum itaque quas sunt
              consectetur temporibus porro, earum tempora quae dolor sequi, non
              id officiis commodi numquam magni? Officiis.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                {" "}
                Get In Touch
              </a>
              <a
                href=''
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                {" "}
                Download CV/Resume
              </a>
            </div>
          </div>

          {/* List of Skills */}
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  {" "}
                  {/* Add coding icons */}
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, quae.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  {" "}
                  {/* Frameworks */}
                  <h4 className='font-semibold text-lg'>Frameworks</h4>
                  <p className='text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, quae.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  {" "}
                  {/* Add Experiences icons */}
                  <h4 className='font-semibold text-lg'>Experiences</h4>
                  <p className='text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, quae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
