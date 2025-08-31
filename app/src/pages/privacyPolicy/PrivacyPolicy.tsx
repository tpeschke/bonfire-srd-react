import { useEffect } from "react"
import { SetLoadingFunction } from "../../components/loading/Loading"
import ContentDisplay from "../chapterDisplay/contentDisplay/ContentDisplay"
import ContentNavigation from "../chapterDisplay/contentNavigation/ContentNavigation"
import { ChapterNavigation, ComponentContent, MarkdownContent } from '@srd/common/interfaces/chapterInterfaces/chapterInterfaces'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string
}

export default function PrivacyPolicy({ pathname, setLoading }: Props) {
    
    useEffect(() => {
        if (setLoading) {
            document.title = "Bonfire SRD"
            setLoading(true)
        }
    }, [])

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            <ContentDisplay contents={policyMarkdown} chapterName="Privacy Policy" pathname={pathname} />
            <ContentNavigation navigation={policyNavigation} pathname={pathname} />
        </div>
    )
}

const policyNavigation: ChapterNavigation[] = [
    {
        section: 'Information Collection And Use',
        id: 'information-collection-and-use',
        type: "h1",
    },
    {
        section: 'Types of Data Collected',
        id: 'types-of-data-collected',
        type: "h1",
    },
    {
        section: 'Personal Data',
        id: 'personal-data',
        type: "h2",
    },
    {
        section: 'Disclosure of Data',
        id: 'disclosure-of-data',
        type: "h2",
    },
    {
        section: 'Terms of Service',
        id: 'terms-of-service',
        type: "h1",
    },
    {
        section: 'Intellectual Property',
        id: 'intellectual-property',
        type: "h2",
    },
    {
        section: 'Links to Other Web Sites',
        id: 'links-to-other-web-sites',
        type: "h2",
    },
    {
        section: 'Termination',
        id: 'termination',
        type: "h2",
    },
    {
        section: 'Indemnification',
        id: 'indemnification',
        type: "h2",
    },
    {
        section: 'Limitation of Liability',
        id: 'limitation-of-liability',
        type: "h2",
    },
    {
        section: 'Disclaimer',
        id: 'disclaimer',
        type: "h2",
    },
    {
        section: 'Exclusions',
        id: 'exclusions',
        type: "h2",
    },
    {
        section: 'Governing Law',
        id: 'governing-law',
        type: "h2",
    },
    {
        section: 'Changes',
        id: 'changes',
        type: "h2",
    },
    {
        section: 'Contact Us',
        id: 'contact-us',
        type: "h1",
    }
]

const policyMarkdown: (MarkdownContent | ComponentContent)[] = [
    {
        type: 'markdown',
        body: `Effective date: June 19, 2019

Stone Fish Games ("us", "we", or "our") operates the https://stone-fish.com website (the "Service").

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Bonfire RPG is created with the help of the [Free Privacy Policy Generator](https://www.freeprivacypolicy.com/free-privacy-policy-generator.php).

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://stone-fish.com/

# Information Collection And Use

We collect several different types of information for various purposes to provide and improve our Service to you.

# Types of Data Collected

## Personal Data

While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:

- Email address
- First name and last name
- Cookies and Usage Data

### Usage Data

We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

### Tracking & Cookies Data

We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.

Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

Examples of Cookies we use:

- **Session Cookies** We use Session Cookies to operate our Service.
- **Preference Cookies** We use Preference Cookies to remember your preferences and various settings.
- **Security Cookies** We use Security Cookies for security purposes.

### Use of Data

Bonfire RPG uses the collected data for various purposes:

- To provide and maintain the Service
- To notify you about changes to our Service
- To allow you to participate in interactive features of our Service when you choose to do so
- To provide customer care and support
- To provide analysis or valuable information so that we can improve the Service
- To monitor the usage of the Service
- To detect, prevent and address technical issues

### Transfer of Data

Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.

Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

Bonfire RPG will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

## Disclosure of Data

### Legal Requirements

Bonfire RPG may disclose your Personal Data in the good faith belief that such action is necessary to:

- To comply with a legal obligation
- To protect and defend the rights or property of Bonfire RPG
- To prevent or investigate possible wrongdoing in connection with the Service
- To protect the personal safety of users of the Service or the public
- To protect against legal liability

### Security of Data

The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

### Service Providers

We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

### Links to Other Sites

Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

### Children's Privacy

Our Service does not address anyone under the age of 18 ("Children").

We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

### Changes to this Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

# Terms of Service

Last updated: June 19, 2019

Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://stone-fish.com website (the "Service") operated by Stone Fish Games ("us", "we", or "our").

Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.

By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.

## Intellectual Property

The Service and its original content, features and functionality are and will remain the exclusive property of BonfireSRD and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BonfireSRD.

## Links to Other Web Sites

Our Service may contain links to third party web sites or services that are not owned or controlled by BonfireSRD

BonfireSRD has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.

You acknowledge and agree that BonfireSRD shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.

## Termination

We may terminate or suspend your access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

## Indemnification

You agree to defend, indemnify and hold harmless BonfireSRD and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.

## Limitation of Liability

In no event shall BonfireSRD, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.

## Disclaimer

Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.

BonfireSRD its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.

## Exclusions

Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.

## Governing Law

These Terms shall be governed and construed in accordance with the laws of Utah, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.

## Changes

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.

# Contact Us

If you have any questions about this Privacy Policy, please contact us:

By email: support@stone-fish.com

Via Discord: https://discord.gg/G8GVTME`
    }
]