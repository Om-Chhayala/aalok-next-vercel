import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from "../components/ContactMe";
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperience'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
const inter = Inter({ subsets: ['latin'] })



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};




export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
  return (
  <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
>
    <Head>
  <title>Aalok Portfolio</title>
</Head>
<Header socials={socials} />
<section id='hero' className='snap-center'>
  <Hero pageInfo={pageInfo}/>
</section>

<section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
    </section>

    <section id="experience" className="snap-center">
        <WorkExperience  experiences={experiences}  />
      </section>

      <section id="skills" className="snap-start">
        <Skills  skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects  projects={projects}/>
      </section>


      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

 </div>
    
  )
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};

