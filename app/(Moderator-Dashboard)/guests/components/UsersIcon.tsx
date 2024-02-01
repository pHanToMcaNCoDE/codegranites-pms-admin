import ThemeButtons from '@/components/ThemeButtons'
import Button from '@/components/ui/Button'
import { SearchNormal } from 'iconsax-react'
import React from 'react'

const UsersIcon = () => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.0003 7.90782C17.9703 7.90782 17.9503 7.90782 17.9203 7.90782H17.8703C15.9803 7.84782 14.5703 6.38781 14.5703 4.58781C14.5703 2.74781 16.0703 1.25781 17.9003 1.25781C19.7303 1.25781 21.2303 2.75781 21.2303 4.58781C21.2203 6.39781 19.8103 7.85782 18.0103 7.91782C18.0103 7.90782 18.0103 7.90782 18.0003 7.90782ZM17.9003 2.74782C16.8903 2.74782 16.0703 3.56782 16.0703 4.57782C16.0703 5.56782 16.8403 6.36782 17.8303 6.40782C17.8403 6.39782 17.9203 6.39782 18.0103 6.40782C18.9803 6.35782 19.7303 5.55782 19.7403 4.57782C19.7403 3.56782 18.9203 2.74782 17.9003 2.74782Z" fill="#282828"/>
            <path d="M18.0105 15.2767C17.6205 15.2767 17.2305 15.2467 16.8405 15.1767C16.4305 15.1067 16.1605 14.7167 16.2305 14.3067C16.3005 13.8967 16.6905 13.6267 17.1005 13.6967C18.3305 13.9067 19.6305 13.6767 20.5005 13.0967C20.9705 12.7867 21.2205 12.3967 21.2205 12.0067C21.2205 11.6167 20.9605 11.2367 20.5005 10.9267C19.6305 10.3467 18.3105 10.1167 17.0705 10.3367C16.6605 10.4167 16.2705 10.1367 16.2005 9.72673C16.1305 9.31673 16.4005 8.92673 16.8105 8.85673C18.4405 8.56673 20.1305 8.87672 21.3305 9.67672C22.2105 10.2667 22.7205 11.1067 22.7205 12.0067C22.7205 12.8967 22.2205 13.7467 21.3305 14.3467C20.4205 14.9467 19.2405 15.2767 18.0105 15.2767Z" fill="#282828"/>
            <path d="M5.97047 7.91C5.96047 7.91 5.95047 7.91 5.95047 7.91C4.15047 7.85 2.74047 6.39 2.73047 4.59C2.73047 2.75 4.23047 1.25 6.06047 1.25C7.89047 1.25 9.39047 2.75 9.39047 4.58C9.39047 6.39 7.98047 7.85 6.18047 7.91L5.97047 7.16L6.04047 7.91C6.02047 7.91 5.99047 7.91 5.97047 7.91ZM6.07047 6.41C6.13047 6.41 6.18047 6.41 6.24047 6.42C7.13047 6.38 7.91047 5.58 7.91047 4.59C7.91047 3.58 7.09047 2.75999 6.08047 2.75999C5.07047 2.75999 4.25047 3.58 4.25047 4.59C4.25047 5.57 5.01047 6.36 5.98047 6.42C5.99047 6.41 6.03047 6.41 6.07047 6.41Z" fill="#292D32"/>
            <path d="M5.96 15.2767C4.73 15.2767 3.55 14.9467 2.64 14.3467C1.76 13.7567 1.25 12.9067 1.25 12.0067C1.25 11.1167 1.76 10.2667 2.64 9.67672C3.84 8.87672 5.53 8.56673 7.16 8.85673C7.57 8.92673 7.84 9.31673 7.77 9.72673C7.7 10.1367 7.31 10.4167 6.9 10.3367C5.66 10.1167 4.35 10.3467 3.47 10.9267C3 11.2367 2.75 11.6167 2.75 12.0067C2.75 12.3967 3.01 12.7867 3.47 13.0967C4.34 13.6767 5.64 13.9067 6.87 13.6967C7.28 13.6267 7.67 13.9067 7.74 14.3067C7.81 14.7167 7.54 15.1067 7.13 15.1767C6.74 15.2467 6.35 15.2767 5.96 15.2767Z" fill="#292D32"/>
            <path d="M12.0003 15.3766C11.9703 15.3766 11.9503 15.3766 11.9203 15.3766H11.8703C9.98031 15.3166 8.57031 13.8566 8.57031 12.0566C8.57031 10.2166 10.0703 8.72656 11.9003 8.72656C13.7303 8.72656 15.2303 10.2266 15.2303 12.0566C15.2203 13.8666 13.8103 15.3266 12.0103 15.3866C12.0103 15.3766 12.0103 15.3766 12.0003 15.3766ZM11.9003 10.2166C10.8903 10.2166 10.0703 11.0366 10.0703 12.0466C10.0703 13.0366 10.8403 13.8366 11.8303 13.8766C11.8403 13.8666 11.9203 13.8666 12.0103 13.8766C12.9803 13.8266 13.7303 13.0266 13.7403 12.0466C13.7403 11.0466 12.9203 10.2166 11.9003 10.2166Z" fill="#292D32"/>
            <path d="M11.9993 22.7588C10.7993 22.7588 9.5993 22.4488 8.6693 21.8188C7.7893 21.2288 7.2793 20.3888 7.2793 19.4888C7.2793 18.5988 7.7793 17.7387 8.6693 17.1488C10.5393 15.9087 13.4693 15.9087 15.3293 17.1488C16.2093 17.7387 16.7193 18.5788 16.7193 19.4788C16.7193 20.3688 16.2193 21.2288 15.3293 21.8188C14.3993 22.4388 13.1993 22.7588 11.9993 22.7588ZM9.4993 18.4088C9.0293 18.7188 8.7793 19.1088 8.7793 19.4988C8.7793 19.8888 9.0393 20.2688 9.4993 20.5788C10.8493 21.4888 13.1393 21.4888 14.4893 20.5788C14.9593 20.2688 15.2093 19.8788 15.2093 19.4888C15.2093 19.0988 14.9493 18.7188 14.4893 18.4088C13.1493 17.4988 10.8593 17.5088 9.4993 18.4088Z" fill="#292D32"/>
        </svg>
    </div>
  )
}

export default UsersIcon
