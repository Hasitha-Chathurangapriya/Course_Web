import * as React from "react";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Card from "@mui/material/Card"; // Import Card component
import CardContent from "@mui/material/CardContent"; // Import CardContent component
import Typography from "@mui/material/Typography"; // Import Typography component
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const initialCardStates = {
  qaSelected: false,
  seSelected: false,
  scSelected: false,
  networkingSelected: false,
  aiSelected: false,
  otherSelected: false,
};

export default function CheckboxLabels() {
  const [cardStates, setCardStates] = useState(initialCardStates);
  const [showProgress, setShowProgress] = useState(false); // State for progress bar display

  const handleCheckboxChange = (event) => {
    setCardStates({
      ...cardStates,
      [event.target.name]: event.target.checked,
    });
    // Reset progress bar display on checkbox change
    setShowProgress(false);
  };

  // useEffect hook to handle progress bar display and removal
  useEffect(() => {
    if (
      cardStates.qaSelected ||
      cardStates.seSelected ||
      cardStates.scSelected ||
      cardStates.networkingSelected ||
      cardStates.aiSelected ||
      cardStates.otherSelected ||
      cardStates.mathlabSelected
    ) {
      setShowProgress(true); // Show progress bar for 3 seconds
      const timeoutId = setTimeout(() => setShowProgress(false), 3000);
      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }
  }, [cardStates]); // Run useEffect whenever cardStates change

  return (
    <div>
      <Typography variant="h5" align="center">
        " Time has financial value."
      </Typography>
      <FormGroup row sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.seSelected}
              onChange={handleCheckboxChange}
              name="seSelected"
            />
          }
          label="SE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.scSelected}
              onChange={handleCheckboxChange}
              name="scSelected"
            />
          }
          label="SC"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.networkingSelected}
              onChange={handleCheckboxChange}
              name="networkingSelected"
            />
          }
          label="Networking"
        />
                <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.qaSelected}
              onChange={handleCheckboxChange}
              name="qaSelected"
            />
          }
          label="QA"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.aiSelected}
              onChange={handleCheckboxChange}
              name="aiSelected"
            />
          }
          label="AI"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.mathlabSelected}
              onChange={handleCheckboxChange}
              name="mathlabSelected"
            />
          }
          label="Mathlab"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cardStates.otherSelected}
              onChange={handleCheckboxChange}
              name="otherSelected"
            />
          }
          label="Other"
        />
      </FormGroup>

      {showProgress && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      )}

      {/* Conditionally render Cards */}
      {cardStates.qaSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              API Test Automation with Postman
            </Typography>
            <Typography variant="body2" align="justify">
              Hello, and welcome to API Test Automation with Postman. My name is
              Beth Marshall, and I'm absolutely delighted to say I'll be your
              instructor on this course. In this course, we'll be talking about
              all things Postman - the most used API collaboration platform in
              the world. In the last year or so, Postman's undergone some major
              transformations. We'll be taking a look around the tool itself, so
              you can become familiar with Postman's latest look and feel.
            </Typography>
            <a href="https://testautomationu.applitools.com/postman-tutorial/">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Selenium Automation Testing for Beginners
            </Typography>
            <Typography variant="body2" align="justify">
              Over the last decade, the Selenium automation tool has gained a
              lot of popularity in the automation testing world due to its
              unique features like - Multiple operating support, multiple
              language support, multiple browsers support, open-source, and
              community support. MNCs to Startups all big and large
              organizations are investing a lot in automation testing which has
              raised the demand for automation experts. Almost all job openings
              for software testing in any part of the world do ask for Selenium
              expertise.
            </Typography>
            <a href="https://codered.eccouncil.org/course/selenium-automation-testing-for-beginners?logged=true">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.seSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              Introduction to JavaScript
            </Typography>
            <Typography variant="body2" align="justify">
              Amazon Bedrock is a fully managed service that offers leading Hey
              everyone, and welcome to Introduction to JavaScript at
              TestAutomationU. We are so thrilled that you are here, and can't
              wait to spend some time with you going over the fundamentals of
              JavaScript.
            </Typography>
            <a href="https://testautomationu.applitools.com/javascript-tutorial/">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              JavaScript Essentials 1
            </Typography>
            <Typography variant="body2" align="justify">
              If you're interested in a career in front-end programming,
              JavaScript is essential to learn. JavaScript is a widely used
              programming language that makes it possible to embed videos and
              search boxes in your favourite website and even refresh your
              social media feed.
            </Typography>
            <a href="https://skillsforall.com/course/javascript-essentials-1?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              JavaScript Essentials 2
            </Typography>
            <Typography variant="body2" align="justify">
              JavaScript is a vital programming language that powers our online
              experiences. From interactive websites to dynamic web
              applications, JavaScript is the driving force behind the
              user-friendly interfaces and functionality we enjoy today. In
              fact, just about every website around the globe utilizes
              JavaScript to provide the best user experience possible. Given the
              global reach of JavaScript, learning the foundations of the
              language can serve you well.
            </Typography>
            <a href="https://skillsforall.com/course/javascript-essentials-2?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Python Essentials 1
            </Typography>
            <Typography variant="body2" align="justify">
              Used by startups and tech giants like Google, Facebook, Netflix,
              and more, Python offers you endless possibilities for creating
              small and large-scale software projects. User-friendly with
              easy-to-read code, Python is a great first programming language to
              learn and requires no prior programming knowledge. Python skills
              open you up to careers in almost any industry and are required if
              you want to continue to more advanced, higher paying software
              development and engineering roles such as software engineer,
              systems administrator, and security engineer.
            </Typography>
            <a href="https://skillsforall.com/course/python-essentials-1?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Python Essentials 2
            </Typography>
            <Typography variant="body2" align="justify">
              Endless possibilities await when you acquire in-demand programming
              skills. Python is a multi-paradigm programming language used by
              startups and tech giants like Google, Facebook, Netflix, and more.
              With intuitive, readable syntax, Python is a great first
              programming language to learn. Having Python skills qualifies you
              for careers in almost any industry and is required for advanced
              and higher paying software development and engineering roles.
            </Typography>
            <a href="https://skillsforall.com/course/python-essentials-2?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.scSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              SQL Injection Attacks
            </Typography>
            <Typography variant="body2" align="justify">
              SQL Injection (SQLi) refers to an injection attack wherein an
              attacker can execute malicious SQL statements (also commonly
              referred to as a malicious payload) that control a web
              application’s database server. The impact SQL injection can have
              on a business is far-reaching. A successful attack may result in
              the unauthorized viewing of user lists, the deletion of entire
              tables, and, in certain cases, the attacker gaining administrative
              rights to a database, all of which are highly detrimental to a
              business.
            </Typography>
            <a href="https://codered.eccouncil.org/course/sql-injection-attacks?logged=true">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Introduction to Dark Web, Anonymity, and Cryptocurrency
            </Typography>
            <Typography variant="body2" align="justify">
              The dark web is a decentralized network of internet sites that try
              to make users as anonymous as possible by routing all their
              communications through multiple servers and encrypting them at
              every step. Given the dark web’s widespread use by people who
              don’t want their activities known to the authorities, you might be
              surprised to hear that it was conceived and prototyped by
              researchers at the U.S. Naval Research Lab, scientists who’d
              already recognized that the open internet was extremely
              susceptible to surveillance. Building on their work, the Tor
              Network went live in 2002, making the dark web widely available
              for the first time. Six years later, the Tor Project released the
              Tor Browser, designed to make the dark web somewhat easier to
              navigate – through, as CSO Magazine noted recently, it can still
              be “unpredictable, unreliable and maddeningly slow.” Tor says its
              network now includes several thousand servers and millions of
              users, though it’s hard to tell whether its user base is
              continuing to grow.
            </Typography>
            <a href="https://codered.eccouncil.org/course/introduction-to-dark-web-anonymity-and-cryptocurrency?logged=true">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Introduction to Dark Web, Anonymity, and Cryptocurrency
            </Typography>
            <Typography variant="body2" align="justify">
              The dark web is a decentralized network of internet sites that try
              to make users as anonymous as possible by routing all their
              communications through multiple servers and encrypting them at
              every step. Given the dark web’s widespread use by people who
              don’t want their activities known to the authorities, you might be
              surprised to hear that it was conceived and prototyped by
              researchers at the U.S. Naval Research Lab, scientists who’d
              already recognized that the open internet was extremely
              susceptible to surveillance. Building on their work, the Tor
              Network went live in 2002, making the dark web widely available
              for the first time. Six years later, the Tor Project released the
              Tor Browser, designed to make the dark web somewhat easier to
              navigate – through, as CSO Magazine noted recently, it can still
              be “unpredictable, unreliable and maddeningly slow.” Tor says its
              network now includes several thousand servers and millions of
              users, though it’s hard to tell whether its user base is
              continuing to grow.
            </Typography>
            <a href="https://codered.eccouncil.org/course/introduction-to-dark-web-anonymity-and-cryptocurrency?logged=true">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Introduction to Cybersecurity
            </Typography>
            <Typography variant="body2" align="justify">
              This introductory course takes you inside the world of
              cybersecurity. You will learn cybersecurity basics to protect your
              personal digital life and gain insights into the biggest security
              challenges companies, governments, and educational institutions
              face today. Cybersecurity professionals who can protect and defend
              an organization’s network are in high demand.
            </Typography>
            <a href="https://skillsforall.com/course/introduction-to-cybersecurity?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Endpoint Security
            </Typography>
            <Typography variant="body2" align="justify">
              Gain the foundational knowledge you will use in the workplace as a
              Junior Cybersecurity Analyst. Each day billions of devices are
              connected to the network, and each one needs to be protected.
              Build the skills to secure your network all the way to the edge,
              including hardware, software, and media. In this course, you will
              learn how to assess the network, operating systems, and endpoints
              for vulnerabilities, and how to secure the network. You will also
              gain skills to maintain the integrity, confidentiality, and
              availability in your network and your data.
            </Typography>
            <a href="https://skillsforall.com/course/endpoint-security?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Ethical Hacker
            </Typography>
            <Typography variant="body2" align="justify">
              The digital landscape is evolving at an unprecedented rate and
              cyber threats lurk around every corner. Cybersecurity resilience
              in the modern world cannot be just an add on - it's a necessity.
              Offensive security professionals like ethical hackers and
              penetration testers can help proactively discover unknown threats
              and address them before the cybercriminals do. This course is
              designed to prepare you with an Ethical Hacker skillset and give
              you a solid understanding of offensive security. You will become
              proficient in the art of scoping, executing, and reporting on
              vulnerability assessments, while recommending mitigation
              strategies. Follow an engaging gamified narrative throughout the
              course and get lots of practice with hands-on labs inspired by
              real-world scenarios.
            </Typography>
            <a href="https://skillsforall.com/course/ethical-hacker?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.networkingSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              Networking Basics
            </Typography>
            <Typography variant="body2" align="justify">
              The internet is built on computer networks. So no matter what kind
              of tech career you are interested in, it is essential to know some
              networking basics! Whether you are preparing for a career in
              networking, refreshing your knowledge for an industry-recognized
              certification, or are just curious about what networking is all
              about, this is the place for you. This course covers the
              foundation of networking and network devices, media, and
              protocols. You will observe data flowing through a network and
              configure devices to connect to networks. Finally, you will learn
              how to use different network applications and protocols to
              accomplish networking tasks. The knowledge and skills you gain can
              give you a starting point to find a rewarding career in tech.
            </Typography>
            <a href="https://skillsforall.com/course/networking-basics?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Network Support and Security
            </Typography>
            <Typography variant="body2" align="justify">
              If you're interested in a career in IT, a support help desk role
              is a common starting point for entry-level network technicians. In
              this course, you will learn the basics of network and user
              support, which are essential for a successful career in
              networking. You'll start with learning how to support endpoints,
              networks, and users by diagnosing problems and documenting them.
              Then, you'll move on to working as a part of a help desk team and
              troubleshooting networks and endpoints. Finally, you'll learn how
              to remotely support users and access networks. This course will
              give you the knowledge and skills you need to be successful in IT.
            </Typography>
            <a href="https://skillsforall.com/course/network-support-security?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Networking Devices and Initial Configuration
            </Typography>
            <Typography variant="body2" align="justify">
              If you know the basics of networking, then get ready to strengthen
              your foundation. A strong networking background is key if you are
              interested in exciting fields such as Cybersecurity and Network
              Development (DevNet) or want to continue towards a networking
              certification like Cisco Certified Network Associate (CCNA). This
              course covers the essentials of network devices and how to
              configure them. Learn the characteristics and benefits of Cloud
              and Virtualization technologies. Explore how to provide Internet
              Protocol (IP) addresses to devices both manually and
              automatically. Using this knowledge, you will calculate an IP
              addressing scheme, configure Cisco devices to create a small
              network, and test for connectivity issues.
            </Typography>
            <a href="https://skillsforall.com/course/networking-devices-and-initial-configuration?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.aiSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              AWS Skill Builder Learner Guide
            </Typography>
            <Typography variant="body2" align="justify">
              This course covers basic AWS Skill Builder navigation, content
              types, and helpful tips as you begin your learning journey. You
              will quickly learn how to use AWS Skill Builder and the other
              resources to supplement your learning. AWS Training and
              Certification regularly updates this course to reflect user
              interface changes and new features or content types.
            </Typography>
            <a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/18443/aws-skill-builder-learner-guide">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Building Language Models on AWS
            </Typography>
            <Typography variant="body2" align="justify">
              Amazon SageMaker helps data scientists prepare, build, train,
              deploy, and monitor machine learning (ML) models. SageMaker brings
              together a broad set of capabilities, including access to
              distributed training libraries, open source models, and foundation
              models (FMs). This course introduces experienced data scientists
              to the challenges of building language models and the different
              storage, ingestion, and training options to process a large text
              corpus. The course also discusses the challenges of deploying
              large models and customizing foundational models for generative
              artificial intelligence (generative AI) tasks using Amazon
              SageMaker Jumpstart.
            </Typography>
            <a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/17556/building-language-models-on-aws">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Foundations of Prompt Engineering
            </Typography>
            <Typography variant="body2" align="justify">
              In this course, you will learn the principles, techniques, and the
              best practices for designing effective prompts. This course
              introduces the basics of prompt engineering, and progresses to
              advanced prompt techniques. You will also learn how to guard
              against prompt misuse and how to mitigate bias when interacting
              with FMs.
            </Typography>
            <a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/17763/foundations-of-prompt-engineering">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Amazon Bedrock Getting Started
            </Typography>
            <Typography variant="body2" align="justify">
              Amazon Bedrock is a fully managed service that offers leading
              foundation models (FMs) and a set of tools to quickly build and
              scale generative AI applications. The service also helps ensure
              privacy and security. In this Getting Started course, you will
              learn about the benefits, features, typical use cases, technical
              concepts, and cost of Amazon Bedrock. You will also review an
              architecture that uses Amazon Bedrock, along with other Amazon Web
              Services (AWS) offerings, to build a chatbot solution. Through a
              guided tutorial consisting of a narrated video, step-by-step
              instructions, and transcript, you will try Amazon Bedrock in your
              AWS account.
            </Typography>
            <a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/17508/amazon-bedrock-getting-started">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Data Analytics Essentials
            </Typography>
            <Typography variant="body2" align="justify">
              This data analytics essentials course teaches you the fundamental
              tools of a data analyst. You will learn to transform, organize,
              and visualize data with spreadsheet tools such as Excel. You will
              also learn how to query data from a relational database using SQL
              and how to improve your data presentations using powerful business
              intelligence tools like Tableau. By the end of the course, you
              will have an analytics portfolio complete with an analysis of the
              popular movies dataset, showcasing your skills in Excel, SQL and
              Tableau.
            </Typography>
            <a href="https://skillsforall.com/course/data-analytics-essentials?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Data Analytics Essentials
            </Typography>
            <Typography variant="body2" align="justify">
              This data analytics essentials course teaches you the fundamental
              tools of a data analyst. You will learn to transform, organize,
              and visualize data with spreadsheet tools such as Excel. You will
              also learn how to query data from a relational database using SQL
              and how to improve your data presentations using powerful business
              intelligence tools like Tableau. By the end of the course, you
              will have an analytics portfolio complete with an analysis of the
              popular movies dataset, showcasing your skills in Excel, SQL and
              Tableau.
            </Typography>
            <a href="https://skillsforall.com/course/data-analytics-essentials?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.mathlabSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              Youtube Playlist Link
            </Typography>
            <a href="https://youtube.com/playlist?list=PL495mke12zYB4CL0t43tAp6ML9DRnLg6H&si=a2g8C3lRWhH2fB5u">
              Go to Playlist
            </a>
          </CardContent>
        </Card>
      )}

      {cardStates.otherSelected && (
        <Card>
          <CardContent>
            <Typography variant="h5" align="justify">
              Computer Hardware Basics
            </Typography>
            <Typography variant="body2" align="justify">
              Amazon Bedrock is a fully managed service that offers leading
              Computers are everywhere! It is because the term “computers”
              refers to more than just a personal computer or laptop. Your
              smartphone is a mini-computer. A server is a super-computer. Cars,
              smart TVs, your game console – they all have a computer. Having a
              basic understanding for these devices and how they work is
              critical for success in today's digital world. This course is a
              great starting point for any IT career. Computer Hardware Basics
              explores the fundamentals of computers and mobile devices, the
              components that comprise them, how they work, and basic
              troubleshooting tools and techniques.
            </Typography>
            <a href="https://skillsforall.com/course/computer-hardware-basics?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
          <CardContent>
            <Typography variant="h5" align="justify">
              Operating Systems Basics
            </Typography>
            <Typography variant="body2" align="justify">
              Every smart device uses an operating system (OS) -- smart devices
              like personal computers, smartphones, game consoles, smart TVs,
              and the list continues. Whether the OS used is Windows, Linux,
              macOS, Android, or iOS, knowing how it works is a key digital
              skill you will need. Take this course to build your foundational
              knowledge for success in any IT career. Operating Systems Basics
              teaches the fundamentals of operating systems. It covers basic
              concepts and skills needed to understand the purpose and
              characteristics of operating systems, the implementation of basic
              OS security, and how to configure mobile device network
              connectivity and email.
            </Typography>
            <a href="https://skillsforall.com/course/operating-systems-basics?courseLang=en-US">
              Go to course
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
