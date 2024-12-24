module.exports = {
    siteUrl: 'https://jgdesign-nu.vercel.app',  // 사이트 URL
    generateRobotsTxt: true,  // robots.txt 자동 생성
    sitemapSize: 5000,  // 한 번에 처리할 수 있는 URL 수
    changefreq: 'daily',  // 업데이트 빈도
    priority: 0.7,  // 기본 우선순위
    additionalSitemaps: [],  // 추가적인 사이트맵이 없다면 빈 배열
    transform: async (config, path) => {
      // / (홈 페이지)만 사이트맵에 포함
      if (path === '/') {
        return {
          loc: path,
          lastmod: new Date().toISOString(),
          priority: 1.0,  // 홈 페이지 우선순위 높게 설정
        };
      }
      // /about 페이지가 없다면 추가하지 않음
      return null;
    },
  };
  