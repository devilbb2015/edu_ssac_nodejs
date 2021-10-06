const client = require("../modules/elasticModule");

const elasticController = {
  search: async (req, res) => {
    const { q } = req.query;
    try {
      const result = await client.search({
        index: "autocomplete_index",
        body: {
          size: 3,
          query: {
            match: {
              "title.ngram": q,
            },
          },
        },
      });

      console.log(result.hits.hits);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "ELS 서버 에러",
      });
    }
  },
};

module.exports = elasticController;
