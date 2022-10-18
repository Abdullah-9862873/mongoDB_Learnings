// Commands of MongoDb

// 1- [show dbs] ---> Used to show all the databases

// 2- [db] ---> Used to display the current database we are working on

// 3- [use (database name)] ---> Use to create a database with a particular name

// 4- [db.dropDatabase()] ---> Used to drop the current database

// 5- [show collections] ---> Used to show all the collections of the database

// 6- [db.createCollection('name')] ---> Used to create a collection with a particular name

// 7- [db.('name).drop()] ---> Used to drop the collection

// 8- [db.(collection_name).insert({ 'key' : 'value' })] ---> Used to insert something in rows

/*      Used to create multiple rows inside collections
 9- [db.(collection_name).insertMany([
        {
            "name" : "Abdullah",
            "degree" : "Software Engineering",
            "duration" : "4 years",
        },
        {
            "name" : "Usama",
            "degree" : "BioInformatics",
            "duration" : "3 years",
        },       
    ])]
*/

// 10- [db.(collection_name).find()] ---> Used to find the rows that are present inside a collection

// 11- [db.(collection_name).find().pretty()] ---> Used to display the rows in a pretty way

// 12- [db.(collection_name).find({lang: 'python})] ---> Used to find the objects inside paticular collection name, which has lang = Python

// 13- [db.(collection_name).find().pretty().limit(2)] ---> Used to give only first two results of the collection

// 14- [db.(collection_name).find().count()] ---> Used to print the number of rows in a particular collection

// 15- [db.(collection_name).find().sort(member_since:1] ---> Used to sort the objects on the basis of (member_since) key in ascending order

// 16-  [db.(collection_name).find().sort(member_since:-1] ---> Used to sort the objects on the basis of (member_since) key in descending order

// 17- [db.(collection_name).findOne(name: "Abdullah")] ---> Used to find the first occurence of the object in which the name is Abdullah

/* Used to search for the object in a particular collection name whose name is "Shazy", if it finds then it will update it but if it doesn't find then it will create it

18- [db.(collection_name).update({name: "Shazy"}), {
    'name' : 'Ahad',
    'degree' : "BSCS"
}, {upsert : true}]

*/

/*  Used to update the comments(collection_name) in which the name is "Abdullah" and it will increment the member since of it by 2

19- [db.comments.update({name: "Abdullah"},
{
    $inc: {
        member_since : 2
    }
} )]

*/

// 20- [db.(collection_name).remove({name: "Abdullah"})] ---> Used to remove the objects in which name is "Abdullah" in a particular collection_name

// 21- [db.(collection_name).find(member_since : {$lt : 10})] ---> Used to find the members whose member since is less than 10

// Note ---> lte(less than equal to), gte(greater than equal to), gt(greater than)



