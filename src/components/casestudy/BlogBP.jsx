import React from 'react'
import BlogsCard from '../components/BlogsCard'

const BlogBP = () => {
  return (
    <div className='mt-24'>
        <h1 className='text-5xl text-center'>MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign</h1>
        <div className='flex flex-col gap-6  mx-16 mt-12'>
            <img src="https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png" alt="" />
            <h3 className='text-lg'>In a strategic move to captivate the audience during Valentine’s season, MyGlamm devised a dynamic influencer-led campaign in collaboration with The Good Creator Co. With the aim to spotlight their limited edition Valentine’s Day collection, MyGlamm harnessed the power of 622 influencers across various domains. </h3>
            <h1 className='text-2xl font-bold'>Objective</h1>
            <h3 className='text-lg'>MyGlamm aimed to promote its limited edition Valentine’s Day collection and increase brand awareness by collaborating with The Good Creator Co for an influencer-driven amplification campaign. The primary objective was to leverage social media influencers to create buzz around the VDay collection, leading to increased impressions, reel plays, and engagement, and ultimately driving sales. The target was to achieve these goals within a budget of 100K.</h3>
            <h1 className='text-2xl font-bold'>Strategy</h1>
            <h3 className='text-lg'>To achieve the campaign’s objectives, MyGlamm partnered with The Good Creator Co to hop into an amplification campaign. The strategy involved collaborating with 622 influencers who resonated with the brand’s aesthetic and had a significant following. The influencers were asked to post the MyGlamm VDay limited edition video on their individual accounts.</h3>
            <h1 className='text-2xl font-bold'>Results</h1>
            <h3 className='text-lg'>The MyGlamm Valentine’s Day amplification campaign exceeded expectations, generating impressive results within the allocated budget of 100K. The campaign garnered a remarkable 5.2 million impressions, indicating widespread visibility. The influencers’ content collectively amassed a whopping 5.2 million reel plays. The engagement rate reached an impressive 3.08% with a social media reach of 4.8 million on an incredible CPR of Rs.0.02, showcasing efficient resource utilisation. </h3>
            <img src="https://i0.wp.com/blog.goodcreator.co/wp-content/uploads/2024/02/Result-Banner-.png?resize=909%2C485&ssl=1" alt="" />
        </div>
        <div className='flex items-center my-8 bg-blue-100 p-5 justify-around'>
            <img className='w-[250px]' src="https://goodcreator.co/icons/newsletter.svg" alt="" />
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl'>Never Miss a Beat..!</h1>
                <h3 className='text-xl'>Get the next blog post from Our Team in your inbox</h3>
                <button className='bg-blue-700 px-12 py-2 rounded-md font-semibold text-lg'>Join Us</button>
            </div>
        </div>
        <div>
            <h1 className='text-3xl font-semibold border-b-2 border-black'>Related Items</h1>
            <div>
                <BlogsCard/>
            </div>
        </div>
    </div>
  )
}

export default BlogBP