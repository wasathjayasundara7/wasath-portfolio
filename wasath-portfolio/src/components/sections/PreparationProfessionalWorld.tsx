import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function PreparationProfessionalWorld() {
    return (
        <section id="preparation-professional-world" className="section-padding relative overflow-hidden dark:bg-dark-card">
            <div className="max-w-5xl mx-auto relative z-10">
                <SectionTitle
                    title="Preparation to the Professional World"
                    subtitle="A personal profile, PPW reflection, and career action plan"
                />

                <div className="space-y-8">
                    <motion.article
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-6 border border-dark-border"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-4">Introduction to Myself</h3>
                        <div className="space-y-4 text-gray-300 font-body leading-relaxed">
                            <p>
                                I am Wasath Jayasundara. I am a final-year B.Sc. (Hons) Information Technology undergraduate at SLIIT.
                                My focus lies at the intersection of business analysis, product management, and UI/UX design. I enjoy
                                turning user needs into practical technology solutions that deliver real business value.
                            </p>
                            <p>
                                I have a distinctly hands-on, project-driven learning style. I prefer thorough conceptual explanations
                                before diving into implementation, and I always ground my work in lecture content (as I have done with
                                business writing principles from PPW slides). I like plain, natural-sounding language over polished
                                corporate speaking, communicate with brief and direct responses, and practice extensively through real
                                projects and exercises.
                            </p>
                            <p>
                                During my internship as IT Product Manager at hSenid Mobile Solutions, I worked directly with Ideamart
                                and APPMAKER platforms. I reviewed applications, supported users, collaborated with cross-functional
                                teams, designed UI concepts, and contributed to feature enhancements. Combined with my academic
                                background in system design, HCI/UI/UX, Agile methodologies, database management, software development,
                                and machine learning, these experiences prepared me for roles requiring analytical thinking, requirements
                                gathering, user understanding, and clear professional communication.
                            </p>
                            <p>
                                I am particularly interested in Business Analysis, Project Management, Product Management, UI/UX Design,
                                and Software Quality Assurance. The skills and mindset I build through SLIIT and hands-on experiences
                                allow me to contribute effectively to collaborative professional environments from day one.
                            </p>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="glass rounded-2xl p-6 border border-dark-border"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-4">Reflective Journal - What I Learned in PPW</h3>
                        <div className="space-y-4 text-gray-300 font-body leading-relaxed">
                            <p>
                                The PPW lectures on Business Writing gave me exactly the practical tools I needed to communicate
                                professionally in the real world. As someone who prefers hands-on, project-driven learning, I appreciated
                                how the slides moved from clear definitions to real examples and an immediate activity.
                            </p>
                            <p>
                                I always like thorough conceptual explanations first, then quick practice, and that is exactly how the
                                lecture was structured. I took notes directly from the slides and applied them on the same day while
                                rewriting old internship emails.
                            </p>
                            <p className="text-white font-medium">What stood out and how I apply it:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Call to action and audience focus: every piece of business writing should clearly tell the reader
                                    what to do next while considering their concerns.
                                </li>
                                <li>
                                    Polite language: words like please, could you, kindly, may, and thank you keep communication
                                    respectful without sounding stiff.
                                </li>
                                <li>
                                    Conciseness: removing fluff makes sentences sharper and easier to read. I practiced rewriting old
                                    sentences using this approach.
                                </li>
                                <li>
                                    Formal language rules: no contractions, no slang, replace vague verbs like get with precise words,
                                    use full forms first for abbreviations, and choose accurate quantity words.
                                </li>
                                <li>
                                    Revise and proofread: check logical flow, read aloud, and get feedback to improve clarity.
                                </li>
                            </ul>
                            <p>
                                These lessons are not just theory for me. During my internship at hSenid Mobile Solutions, I had to
                                write user-support emails, application review notes, and feature enhancement suggestions. Applying PPW
                                principles now makes those communications clearer, more professional, and more likely to get faster
                                responses from cross-functional teams.
                            </p>
                            <p>
                                Most importantly, the hands-on lecture style matched my project-driven preference. Because of this module,
                                I now feel confident that I can close the professional communication gap before entering the industry
                                full-time. This reflective practice has made me a stronger communicator and directly supports my career
                                goals in Business Analysis, Product Management, UI/UX Design, and Project Management.
                            </p>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass rounded-2xl p-6 border border-dark-border"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-4">Career Development Plan</h3>
                        <div className="space-y-4 text-gray-300 font-body leading-relaxed">
                            <p>
                                My career development plan is centered on Project Management, aligned with my Agile and project-based
                                academic background, internship experience in product planning and feature enhancement, and strengths in
                                analytical thinking, requirements gathering, leadership, and teamwork.
                            </p>

                            <div>
                                <p className="text-white font-medium mb-2">Short-term goals (2026-2027)</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Complete my B.Sc. (Hons) in IT at SLIIT with strong final-year outcomes.</li>
                                    <li>Secure a graduate role as a Junior Project Manager or Project Coordinator.</li>
                                    <li>Build a portfolio with 3-4 case studies in planning, requirements, and delivery.</li>
                                    <li>Complete the Google Project Management Professional Certificate.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-white font-medium mb-2">Long-term goals (2028 onwards)</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Advance to Senior Project Manager or Program Manager in a leading tech company.</li>
                                    <li>Lead cross-functional teams on high-impact projects delivered on time and quality.</li>
                                    <li>Continue community initiatives to strengthen leadership and stakeholder engagement.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-white font-medium mb-2">Action steps</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Apply PPW writing principles to every email, update, report, and requirement document.</li>
                                    <li>Update my CV and LinkedIn monthly with projects, skills, and certifications.</li>
                                    <li>Network through alumni events, meetups, and PM-focused professional groups.</li>
                                    <li>Review this plan every six months and adjust based on mentor/interviewer feedback.</li>
                                    <li>Treat each assignment as a mini-project from concept to implementation and reflection.</li>
                                </ol>
                            </div>
                            <p>
                                This plan keeps me focused on Project Management while remaining flexible enough to incorporate
                                opportunities in Business Analysis or Product Management. By combining technical skills, internship
                                experience, and professional communication tools from PPW, I am confident I can transition smoothly into
                                a graduate Project Management role and grow into a strong contributor in collaborative tech environments.
                            </p>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
