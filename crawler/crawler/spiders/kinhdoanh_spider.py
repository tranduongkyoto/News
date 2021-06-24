import scrapy


class QuotesSpider(scrapy.Spider):
    name = "kinhdoanhs"
    start_urls = [
        'https://vnexpress.net/kinh-doanh'
    ]
    custom_settings = {
        'FEED_EXPORT_ENCODING': 'utf-8',
    }

    def parse(self, response):
        for new in response.css('article'):
            yield {
                'title': new.css('h3 a::text').get(),
                'des': new.css('p a::text').get(),
                'href': new.css('div a::attr(href)').get(),
                'img': new.css('div a picture img::attr(data-src)').get()
            }
        next_page = response.css(
            'div.pagination div a.next-page::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse2)

    def parse2(self, response):
        for new in response.css('article'):
            yield {
                'title': new.css('h2 a::text').get(),
                'des': new.css('p a::text').get(),
                'href': new.css('article div a::attr(href)').get(),
                'img': new.css('article div a picture img::attr(data-src)').get()
            }
        next_page = response.css(
            'div.pagination div a.next-page::attr(href)').get()
        if next_page is not None and next_page != '/kinh-doanh-p10':
            yield response.follow(next_page, callback=self.parse2)
