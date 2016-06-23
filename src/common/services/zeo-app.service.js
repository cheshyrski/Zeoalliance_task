(function() {
    "use strict";

    angular.module('zeo-app')
        .factory('ZeoAppService', ZeoAppService);

    function ZeoAppService() {
        var steps = [{
            step_number: 1,
            step_description: 'Click <b><a href="#">”Download now”</a></b>',
            icon_src: 'images/icons/green_icon-1.png'
        }, {
            step_number: 2,
            step_description: 'Click <b>”Run”</b> or <b>“Save”</b>',
            icon_src: 'images/icons/green_icon-2.png'
        }, {
            step_number: 3,
            step_description: 'Scan your Mac',
            icon_src: 'images/icons/green_icon-3.png'
        }];

        var features = [{
            title: 'Human assistance',
            description: 'Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.',
            feature_src: 'images/feature-icons/f1.png'
        }, {
            title: 'Internet security',
            description: 'Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you\'re using the Internet.',
            feature_src: 'images/feature-icons/f2.png'
        }, {
            title: 'Anti-theft',
            description: 'If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.',
            feature_src: 'images/feature-icons/f3.png'
        }, {
            title: 'Fast cleanup',
            description: 'Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.',
            feature_src: 'images/feature-icons/f4.png'
        }, {
            title: 'Duplicates finder',
            description: 'Delete unnecessary copies of your files and free up disk space on your Mac.',
            feature_src: 'images/feature-icons/f5.png'
        }, {
            title: 'Geek on demand',
            description: 'Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac\'s health and need an expert\'s opinion or technical assistance.',
            feature_src: 'images/feature-icons/f6.png'
        }, {
            title: 'Update tracker',
            description: 'With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.',
            feature_src: 'images/feature-icons/f7.png'
        }, {
            title: 'Backup',
            description: 'Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.',
            feature_src: 'images/feature-icons/f8.png'
        }, {
            title: 'Files recovery',
            description: 'Now you can recover files that were once deleted from the Trash!',
            feature_src: 'images/feature-icons/f9.png'
        }, {
            title: 'Disk usage',
            description: 'Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.',
            feature_src: 'images/feature-icons/f10.png'
        }, {
            title: 'Smart uninstaller',
            description: 'Prevent future junk by making sure that you\'re not just sweeping old applications under the rug when you are trying to delete them.',
            feature_src: 'images/feature-icons/f11.png'
        }, {
            title: 'Data encryptor',
            description: 'Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.',
            feature_src: 'images/feature-icons/f12.png'
        }, {
            title: 'Default apps',
            description: 'The easiest way to define which application will open each file type.',
            feature_src: 'images/feature-icons/f13.png'
        }, {
            title: 'Shredder',
            description: 'Securely delete files and folders that you don\'t ever want to be recovered.',
            feature_src: 'images/feature-icons/f14.png'
        }, {
            title: 'Files finder',
            description: 'Quickly search for and find any lost or misplaced file, even if you don\'t know in which folder it is located.',
            feature_src: 'images/feature-icons/f15.png'
        }, {
            title: 'Login items',
            description: 'Take control of how fast your Mac boots up by deciding which applications launch every time you start it.',
            feature_src: 'images/feature-icons/f16.png'
        }, {
            title: 'Memory Cleaner',
            description: 'Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks.',
            feature_src: 'images/feature-icons/f17.png'
        }];

        var reviews = [{
            content: '"I just renewed my subscription with Mc. Keeper.<br>I like it, I feel my computer is well protected."'
        }, {
            content: '“Easy to order. I had to purchase a few add-ons above and beyond what I expected, but overall, I\'m very satis-<br>fied with everything.”'
        }, {
            content: '“I have used Mackeeper before and I liked it and decided to come back to it.”'
        }];

        return {
            features: features,
            steps: steps,
            reviews: reviews
        };
    }
}());
